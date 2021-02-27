import { createServer } from 'http';
import socket, { Server, Socket } from 'socket.io';
import { Express } from 'express';

class InitSocket {
  io: Express | null = null;

  constructor(server: Express | null) {
    this.io = socket(server);
  }

  setUp() {
    this.io.on('connection', (socket: Socket) => {
      socket.emit('hello', { msg: 'connection' });

      socket.on('message', (data) => {
        console.log('data', data);
      });
    });
  }
}

const httpServer = createServer();
const io = new Server(httpServer, {});

const listenServer = () => {
  httpServer.listen(3000);
};

export { listenServer };
