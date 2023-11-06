const express = require('express');
const cors = require('cors')
const app = express();
const Players = require('./players')
const config = require('./connection');
const path = require('path');
// app.use(express.static(webpage));
app.use(cors());
config();
app.use(express.json());


app.get('/players',async(_,res)=>{
let players = await Players.find();
res.send(players); 
})

app.get('/players/:key',async (req,res)=>{
    let result = await Players.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {img:{$regex:req.params.key}},
            {role:{$regex:req.params.key}},
        ]
    })
    res.send(result);
})
  
app.get('*',(_,res)=>{
  res.send('Record not Found')
})
app.post('/players',async (req,res)=>{
  let players = new Players(req.body)
  let data = await players.save();
  res.send(data);
})

app.listen(4000,()=>{
  console.log(`http://127.0.0.1:4000/`)
})
