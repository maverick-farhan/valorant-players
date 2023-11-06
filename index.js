const express = require('express');
const cors = require('cors')
const app = express();
const Players = require('./players')
const config = require('./connection');
config();
app.use(express.json());

app.get('/',async(_,res)=>{
let players = await Players.find();
res.send(players); 
})

app.get('/:key',async (req,res)=>{
    let result = await Players.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {img:{$regex:req.params.key}},
            {role:{$regex:req.params.key}},
        ]
    })
  if(result){
    res.send(result);
  }
  else{
    res.send({result:"Result Not Found"})
  }
})

app.get('*',(_,res)=>{
  res.send('Record not Found')
})
// app.post('/players',async (req,res)=>{
//   let players = new Players(req.body)
//   let data = await players.save();
//   res.send(data);
// })
app.listen(4000,()=>{
  console.log(`http://127.0.0.1:4000/`)
})
