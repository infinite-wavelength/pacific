import amqp, { Channel, Connection } from 'amqplib';

class AMQPWrapper {
    private _connection?: Connection;
    private _channel?: Channel;

    get connection() {
        if (!this._connection) {
            throw new Error('Not connected to RabbitMQ');
        }
        return this._connection;
    }

    get channel() {
        if (!this._channel) {
            throw new Error('Not connected to RabbitMQ');
        }
        return this._channel;
    }

    async connect(url: string) {
        this._connection = await amqp.connect(url);
        this._channel = await this._connection.createChannel();
        console.log('Connected to RabbitMQ')
    }
}

export const amqpWrapper = new AMQPWrapper();