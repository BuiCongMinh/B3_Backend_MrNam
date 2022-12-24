const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/BootCamp_B3')
.then(data=>{console.log('mongo connect!')})
.catch(er =>{console.log(`mongo connect er: ${er}`)})


module.exports = mongoose
