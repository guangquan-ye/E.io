import express, { Request, Response } from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';
import path from 'path';

// Création de l'application Express
const app = express();
const port = 3000;

// Création du serveur HTTP et du serveur Socket.IO
const server = http.createServer(app);
const io = new SocketIOServer(server);

// Route de base pour '/'
app.get('/', (req: Request, res: Response) => {
    res.send('Hello Test!');
});

// Route pour '/users'
app.get('/users', (req: Request, res: Response) => {
    res.send('Hello Users!');
});

// Route pour '/test'
app.get('/test', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

// Démarrage du serveur
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
