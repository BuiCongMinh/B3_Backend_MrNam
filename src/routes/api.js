const router = require('express').Router()
const {postAPIComment, getAllAPIComment} = require('../controller/comment.controller')
const {postAPIProduct,getAllAPIProduct} = require('../controller/product.controller')

// rest API Comment 
router.get('/get-all/comment',getAllAPIComment)
router.post('/post/comment',postAPIComment)


// rest API Product
router.post('/post/product',postAPIProduct)
router.get('/get-all/product',getAllAPIProduct)

module.exports = router
