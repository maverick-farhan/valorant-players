const mongoose = require('mongoose')
const config = ()=>{
mongoose.connect(`mongodb+srv://valorantAPI:valorantAPI@cluster0.tbrppdl.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Connected!')
})
}
module.exports = config;
