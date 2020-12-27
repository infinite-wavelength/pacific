import { Connection } from 'amqplib';
import { Consumer } from './consumer';
import { Queues } from './queues';
import { UserEvent } from './user.event';

export class UserConsumer extends Consumer<UserEvent>{
    queue: Queues = Queues.User;

    constructor(connection: Connection) {
        super(connection);
    }

    onMessage(data: UserEvent): void {
        console.log(data);
    }
}