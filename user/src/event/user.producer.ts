import { Connection } from 'amqplib';
import { Producer } from './producer';
import { Queues } from './queues';
import { UserEvent } from './user.event';

export class UserProducer extends Producer<UserEvent>{
    queue: Queues = Queues.User

    constructor(connection: Connection) {
        super(connection);
    }
}