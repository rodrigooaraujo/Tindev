const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

//change from test to something 
mongoose.connect('XXXX',
    { useNewUrlParser: true });

server.use(cors());
server.use(express.json());

//Enable React to acess the server
server.use(routes);

server.listen(4444);