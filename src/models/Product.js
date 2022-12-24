const mongoose = require('./A_config')

const Schema = mongoose.Schema

const Product = mongoose.model('product',Schema({
    Name: {type: String, required:true },
    Quatity: {type: Number, required: true},
    comment: [{type: Schema.Types.ObjectId, ref:'comment'}]
},{collection:'product'}))

// Product.create(
//     {Name: 'Quần áo' , Quatity: 12 , content:[ '63a6b13321e2d0300a84ae1e', '63a6b15321e2d0300a84ae20' , '63a6b17121e2d0300a84ae22' ]},
// )
// .then(data=>{console.log(data);})
// .catch(er=>{console.log(er);})

module.exports = Product
