import { Event } from './event';
import { Events } from './events';

export class UserEvent implements Event{
    event: Events;
    data: any;

    constructor(event: Events, data: any) {
        this.event = event;
        this.data = data;
    }
}