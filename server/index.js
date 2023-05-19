const express = require('express');
const server = express();
server.use(express.json());

const serverAddress = '127.0.0.1'; // `${process.env.DB_HOST}:${process.env.PORT}` || '127.0.0.1';
require('./DB/database');

server.get('/' , (req, res) => {
    res.send('Hello')
})

server.use('/api/auth' , require('./routes/auth'));
server.use('/api/notes' , require('./routes/notes'));

// ? Port Listening
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`⚡️[Local Server]: Server is running at http://${serverAddress}:${port}  ⚡️`);
});