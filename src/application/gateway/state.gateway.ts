import { OnModuleInit } from '@nestjs/common';

import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class StateGateway implements OnModuleInit {
  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('new connection');
    });
  }

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('alert')
  onAlert(@MessageBody() body: object) {
    console.log({ gateway: body });
    // this.server.emit('alert', body, client.id);
  }
}
