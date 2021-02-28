import { Server, Socket } from 'socket.io';

interface roomInfo {
  roomId: string;
}
class InitSocket {
  public io: Server;

  constructor(server: Express.Application) {
    this.io = new Server(server);
  }

  setUp() {
    this.io.listen(3000);

    this.io.on('connection', (socket: Socket) => {
      socket.emit('connected', socket.id + ' connected!!!');

      socket.on('joinRoom', ({ roomId }: roomInfo, leaveRoomFn: Function) => {
        leaveRoomFn && leaveRoomFn();
        this.joinRoom(socket, roomId);
      });

      socket.on('leaveRoom', (roomId: string) => {
        socket.leave(roomId);
        this.io.to(roomId).emit('joinRoom', `${socket.id}, ${roomId} 나감요`);
      });
    });
  }

  joinRoom(socket: Socket, roomId: string) {
    socket.join(roomId);
    this.io.to(roomId).emit('joinRoom', `${socket.id}, ${roomId} 조인요`);
  }
}

export { InitSocket };
