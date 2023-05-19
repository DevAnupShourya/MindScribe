const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/notesync';

mongoose.connect(uri)
    .then(() => {
        console.log(`🎇 [Database]:  Connected to "${uri}" Database 🎇`);
    }).catch((error) => {
        console.error(`[Database]:  Connetion Failed to "${uri}" Database with ${error}`);
    });