const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const uri = `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

mongoose.connect(uri)
    .then(() => {
        console.log(`🎇 [Database]:  Connected to "${process.env.DB_NAME.toUpperCase()}" Database 🎇`);
    }).catch((error) => {
        console.error(`[Database]:  Connetion Failed to "${process.env.DB_NAME.toUpperCase()}" Database with ${error}`);
    });