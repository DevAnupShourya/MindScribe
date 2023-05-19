const express = require('express');
const notes = express.Router();

notes.get('/' , (req , res) => {
    res.send('notes api')
})

module.exports = notes;