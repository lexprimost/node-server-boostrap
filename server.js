const express = require('express');
const dotenv = require('dotenv');

//dotenv package initialization
dotenv.config();

const app = express();

//use port defined in .env files or 3000 if not defined in the .env file
const PORT = process.env.PORT || 3000;

//simple route
app.get('/', (req, resp, next) => {
    resp.send('Hello from Node Server ! this is a minimalist nodejs server to get you started')
} );

//app starts a server and listens on port defined in PORT variable for connections. 
app.listen(PORT, () => {
    console.log(`server listenning on port ${PORT}`)
});

//-USAGE
//type in your console : 'npm run dev' to run in development mode
//--OR
//type in your console : 'npm run start' to run in production mode
//visit localhost:3002 in your browser
