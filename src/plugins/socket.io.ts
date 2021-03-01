import { Server, Socket } from 'socket.io';

interface roomInfo {
  roomId: string;
}

const option = {
  path: '/chat',
};
class InitSocket {
  public io: Server;

  constructor(server: Express.Application) {
    this.io = new Server(server, option);
  }

  setUp() {
    this.io.on('connection', (socket: Socket) => {
      socket.emit('connected', socket.id + ' connected!!!');

      socket.on('joinRoom', ({ roomId }: roomInfo, leaveRoomFn: Function) => {
        // leaveRoomFn && leaveRoomFn(); 조인과 동시에 이전 방 나가기
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('joinRoom', {
          type: 'notice',
          message: `${socket.id} 님이 입장하셨습니다.`,
        });
      });

      socket.on('leaveRoom', (roomId: string) => {
        socket.leave(roomId);
        socket.broadcast.to(roomId).emit('joinRoom', {
          type: 'notice',
          message: `${socket.id} 님이 퇴장하셨습니다.`,
        });
      });

      socket.on('message', (roomId: string, message: string, fn: Function) => {
        fn && fn({ type: 'message', userId: socket.id, message }); //넘어온 function(fn)이 있으면 data.msg를 담아 리턴.
        socket.broadcast
          .to(roomId)
          .emit('message', { userId: socket.id, message });
      });
    });
  }
}

export { InitSocket };
