/**
 * Copyright (c) Alexandr <alexandr532@proton.me>.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree
 *
 * @fetchforio 2022-08-15
 */
import { Server } from 'socket.io';
import { Socket } from 'socket.io-client';
import { FetchForServer } from './FetchForServer';
import { FetchForSocket } from './FetchForSocket';

export class FetchForIo {
  public static app: FetchForServer | FetchForSocket;

  public static init(io: Server | Socket) {
    if (FetchForIo.app) {
      console.warn('FetchForIo init called second time!');
    }
    if (io instanceof Server) {
      FetchForIo.app = new FetchForServer(io) ;
    } else if (io instanceof Socket) {
      FetchForIo.app = new FetchForSocket(io);
    }
    return FetchForIo.app;
  }

  protected constructor() {}
}
