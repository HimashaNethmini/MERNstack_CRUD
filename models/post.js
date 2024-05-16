const mongoose = require('module');

const postSchema = new mongoose.schema({
    
    topic:{
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    postCategory: {
        type:String,
        required:true
    }



});

module.exports = mongoose.model('Posts', postSchema);