const express = require('express');
const server = express();
server.use(express.json());

const cors = require('cors');
server.use(cors())

// ? Database 
require('./DB/database');

// ? routes
server.get('/' , (req, res) => {
    res.json({ "name" : 'MindScribe' , "details" :  "MindScribe is a revolutionary note-taking platform that unlocks the power of your thoughts. Seamlessly capture your ideas, insights, and inspirations in a beautifully designed digital space. With its intelligent organization features, MindScribe helps you make connections between your notes and discover new perspectives. Experience the freedom to create, explore, and grow with MindScribe."})
})
server.get('/api' , (req, res) => {
    res.json({ "name" : 'MindScribe API' , "details" :  "MindScribe API is a revolutionary note-taking platform that unlocks the power of your thoughts. Seamlessly capture your ideas, insights, and inspirations in a beautifully designed digital space. With its intelligent organization features, MindScribe helps you make connections between your notes and discover new perspectives. Experience the freedom to create, explore, and grow with MindScribe."})
})
// ? APIs
server.use('/api/auth' , require('./routes/auth'));
server.use('/api/notes' , require('./routes/notes'));

// ? Loading .env file contents into process.env
const dotenv = require("dotenv");
dotenv.config();
const serverAddress = `${process.env.DB_HOST}:${process.env.PORT}`;

// ? Port Listening
server.listen(process.env.PORT, () => {
    console.log(`⚡️[Local Server]: Server is running at http://${serverAddress}  ⚡️`);
});

/*
cd ./client
npm run start
cd ../server
nodemon ./index.js
*/