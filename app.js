require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const compression = require('compression');
var socket = require('socket.io');
var socketioJwt = require("socketio-jwt");

const PORT = process.env.PORT || 3002;

var server = app.listen(PORT, function () {
    console.log('listening to requests on port ' + PORT);
});

const postRoutes = require('./api/routes/posts');
const userRoutes = require('./api/routes/user');
const { env } = require('process');

app.use(compression());
app.use(express.static('public'));
mongoose.connect('mongodb+srv://Heimot:' + process.env.DEV + '@insta-rest-api.8ybrw.mongodb.net/insta-rest-api?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
mongoose.Promise = global.Promise;

///////////////////////////
/*
var io = socket(server);

io.use(socketioJwt.authorize({
    secret: process.env.JWT_KEY,
    handshake: true
  }));

io.on('connection', function (socket) {
    socket.on('chat', function (data) {
        io.sockets.emit('chat', data);
    });
    socket.on('idUpdate', function (data) {
        io.sockets.emit('idUpdate', data);
    });
    socket.on('rullakotUpdt', function (data) {
        io.sockets.emit('rullakotUpdt', data);
    });
});
*/
/////////////////////////

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Accept-Encoding', 'gzip');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes which handle requests
app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;