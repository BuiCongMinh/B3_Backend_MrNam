const Product = require('../models/Product')

const postAPIProduct = (req,res)=>{
    console.log(req.body);
    Product.create({ 
        Name:req.body.Name,
        Quatity: req.body.Quatity,
        comment:req.body.comment
    })
    .then(data=>{res.status(200).json(data)})
    .catch(er =>{ res.status(500).json(er)})
}

const getAllAPIProduct = (req,res)=>{
    Product.find()
    .then(data=>{res.status(200).json(data)})
    .catch(er=>{res.status(500).json(er)})
}

module.exports = {postAPIProduct, getAllAPIProduct}
