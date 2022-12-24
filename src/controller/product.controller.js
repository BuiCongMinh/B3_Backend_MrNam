const Product = require('../models/Product')

const postAPIProduct = (req, res) => {
    Product.create({
        Name: req.body.Name,
        Quatity: req.body.Quatity,
        comment: req.body.comment
    })
        .then(data => { res.status(200).json(data) })
        .catch(er => { res.status(500).json(er) })
}

const getAllAPIProduct = (req, res) => {
    Product.find()
        .then(data => { res.status(200).json(data) })
        .catch(er => { res.status(500).json(er) })
}

const getOneAPIProduct = (req, res) => {
    Product.findOne({ Name: req.params.name })
        .then(data => { res.status(200).json(data) })
        .catch(er => { res.status(500).json({ mesage: 'server er', er }) })
}


const patchProduct = (req, res) => {
    Product.updateOne({ Name: req.params.name }, req.body)
        .then(data => { res.status(200).json(data) })
        .catch(er => { res.status(500).json({ mesage: 'server er', er }) })
}


const deleteProduct = (req, res) => {
    Product.deleteOne({ Name: req.body.Name })
        .then(data => { res.status(200).json(data) })
        .catch(er => { res.status(500).json({ mesage: 'server er', er }) })
}

module.exports = { postAPIProduct, getAllAPIProduct, getOneAPIProduct, patchProduct, deleteProduct }
