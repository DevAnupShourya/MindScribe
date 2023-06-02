const express = require('express');
const server = express();
server.use(express.json());

const cors = require('cors');
server.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }))

// ? Database 
require('./DB/database');

// ? Importing Cookies
const cookieParser = require('cookie-parser');
server.use(cookieParser())

// ? routes
server.get('/', (req, res) => {
    return res.json({ "name": 'MindScribe', "details": "MindScribe is a revolutionary note-taking platform that unlocks the power of your thoughts. Seamlessly capture your ideas, insights, and inspirations in a beautifully designed digital space. With its intelligent organization features, MindScribe helps you make connections between your notes and discover new perspectives. Experience the freedom to create, explore, and grow with MindScribe." })
})
server.get('/api', (req, res) => {
    return res.json({ "name": 'MindScribe API', "details": "MindScribe API is a revolutionary note-taking platform that unlocks the power of your thoughts. Seamlessly capture your ideas, insights, and inspirations in a beautifully designed digital space. With its intelligent organization features, MindScribe helps you make connections between your notes and discover new perspectives. Experience the freedom to create, explore, and grow with MindScribe." })
})
// ? APIs
server.use('/api/auth', require('./routes/auth'));
server.use('/api/notes', require('./routes/notes'));


server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// ? Loading .env file contents into process.env
const dotenv = require("dotenv");
dotenv.config();
const serverAddress = `${process.env.DB_HOST}:${process.env.PORT}`;

// ? Port Listening
server.listen(process.env.PORT, () => {
    console.log(`⚡️[Local Server]: Server is running at http://${serverAddress}  ⚡️`);
});