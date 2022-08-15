/**
 * Copyright (c) Alexandr <alexandr532@proton.me>.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree
 *
 * @fetchforio 2022-08-15
 */
import { Socket } from 'socket.io-client';

export class FetchForSocket {
  public constructor(
    private socket: Socket
  ) {}
}
