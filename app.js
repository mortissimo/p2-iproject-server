require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer);
const cors = require('cors');
const Controller = require('./controllers/controller');
const  errorHandler  = require('./middlewares/errorHandlers')


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/emailLog', Controller.saveToEmail)
app.use(errorHandler);
// let rooms = [];
let users = {};
let youtubeLink = '';
io.on('connection', (socket) =>{
    console.log('user connected');
    socket.on("sendMessages", (data) =>{
        // console.log(data, 'ini keterima di server')
        io.emit('broadcastMessage', data);
    })
    socket.on('join',(user) =>{
        // const dataUser =     
        users[socket.id] = user
        // console.log(users);
        // socket.emit('getRooms', rooms)
        socket.on('disconnect', () => {
            delete users[socket.id]
            io.emit('sendUsers', users)
        })
    })
    socket.on('fetchUrl', () =>{
        io.to(socket.id).emit('videoUrl', youtubeLink)
    })
    socket.on('changeUrl', (url) =>{
        youtubeLink = url;
        // console.log(youtubeLink);
        io.emit('videoUrl', url);
    })
    socket.on('getUser', () =>{
        io.emit('sendUsers', users)
    })
})

httpServer.listen(port, () =>{
    console.log('Server running on port ', port);
})