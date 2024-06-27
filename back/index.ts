// import express, { Request, Response } from 'express';
// import { Server as SocketIOServer } from 'socket.io';
// import http from 'http';
// import path from 'path';

// // Création de l'application Express
// const app = express();
// const port = 3000;

// // Création du serveur HTTP et du serveur Socket.IO
// const server = http.createServer(app);
// const io = new SocketIOServer(server);

// // Route de base pour '/'
// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello Test!');
// });

// // Route pour '/test'
// app.get('/test', (req: Request, res: Response) => {
//     res.sendFile(path.resolve(__dirname, '../src/index.html'));
// });

// // Démarrage du serveur
// server.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });


const express = require('express');
const { createServer } = require('http'); // Pas besoin de spécifier 'node:http'
const { Server } = require('socket.io');
const { join } = require('node:path');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true,
    },
    }
);

// Import correct des types depuis Express
import { Request, Response } from 'express';

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello world</h1>');
});


app.get('/test', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, ''));
  });
  


io.on('connection', (socket: any) => {
    console.log('a user connected');
    socket.emit('message', 'Hello world from server');

    socket.on("hello", (arg: any) => console.log(arg));

  });


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
