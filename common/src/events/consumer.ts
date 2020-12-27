import { Connection } from 'amqplib';
import { Event } from './event';
import { Queues } from './queues';

export abstract class Consumer<T extends Event> {
    abstract queue: Queues
    protected connection: Connection

    abstract onMessage(data: T): void;

    constructor(connection: Connection, queue: Queues) {
        this.connection = connection;
    }

    async consume() {
        if (this.connection) {
            const channel = await this.connection.createChannel();
            channel.consume(this.queue, (msg: any) => {
                this.onMessage(JSON.parse(msg.content.toString()));
            });
        }
        throw new Error('Cannot connect to RabbitMQ')
    }
}