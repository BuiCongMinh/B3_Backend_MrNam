const mongoose = require('./A_config')

const Comment = mongoose.model('comment',new mongoose.Schema({
    content: String
},{collection:'comment'}))

module.exports = Comment
