"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
// Création de l'application Express
const app = (0, express_1.default)();
const port = 3000;
// Création du serveur HTTP et du serveur Socket.IO
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
// Route de base pour '/'
app.get('/', (req, res) => {
    res.send('Hello Test!');
});
// Route pour '/users'
app.get('/users', (req, res) => {
    res.send('Hello Users!');
});
// Route pour '/test'
app.get('/test', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../index.html'));
});
// Démarrage du serveur
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
