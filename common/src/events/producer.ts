import { Connection, Channel } from 'amqplib';
import { Event } from './event';
import { Queues } from './queues';

export abstract class Producer<T extends Event> {
    abstract event: T['event']
    protected connection: Connection
    private queue: Queues

    constructor(connection: Connection, queue: Queues) {
        this.connection = connection;
        this.queue = queue;
    }

    async produce(data: T['data']) {
        if (this.connection) {
            const channel: Channel = await this.connection.createChannel();
            await channel.sendToQueue(this.queue, Buffer.from(data));
        }
        throw new Error('Cannot connect to RabbitMQ')
    }
}