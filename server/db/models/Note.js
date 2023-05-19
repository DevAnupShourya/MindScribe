const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true,
    },
    tags : {
        type : String,
        default : "General"
    },
    date : {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('note' , NoteSchema);