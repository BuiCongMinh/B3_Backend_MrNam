const Comment = require('../models/Comment')

const postAPIComment = (req,res)=>{
    Comment.create({content:req.body.content})
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(er=>{
        res.status(500).json(er)
    })
}

const getAllAPIComment= (req,res)=>{
    Comment.find()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(er=>{
        res.status(500).json(er)
    })
}



module.exports = {postAPIComment, getAllAPIComment}
