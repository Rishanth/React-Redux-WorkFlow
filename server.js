import express from 'express';

// Initalizing the Web Server
const app = express();

// Letting the Server know from where to serve.
app.use(express.static('public'));

// Making our server to listen to a port.
app.listen(3000, () => console.log('Express Server Listening to 3000'));
