const mongoose = require('mongoose')
const config = ()=>{
mongoose.connect(`mongodb://127.0.0.1:27017/valorant`)
.then(()=>{
    console.log('Connected!')
})
}
module.exports = config;
