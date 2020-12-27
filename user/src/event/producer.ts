import { Connection, Channel } from 'amqplib';
import { Event } from './event';
import { Queues } from './queues';

export abstract class Producer<T extends Event> {
    protected connection: Connection
    abstract queue: Queues;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    async produce(event: T) {
        if (this.connection) {
            const channel: Channel = await this.connection.createChannel();
            await channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(event)));
            return;
        }
        throw new Error('Cannot connect to RabbitMQ')
    }
}