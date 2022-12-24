const router = require('express').Router()
const {postAPIComment, getAllAPIComment} = require('../controller/comment.controller')
const productController = require('../controller/product.controller')

// rest API Comment 
router.get('/get-all/comment',getAllAPIComment)
router.post('/post/comment',postAPIComment)


// rest API Product
router.post('/post/product',productController.postAPIProduct)
router.get('/get-all/product',productController.getAllAPIProduct)
router.get('/get/product/:name',productController.getOneAPIProduct)
router.patch('/patch/product/:name',productController.patchProduct)
router.delete('/delete/product', productController.deleteProduct)

module.exports = router
