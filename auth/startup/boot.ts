import { Application } from 'express';
import config from '../config/config';

const boot = (app:Application) => {
    app.listen(config.port, () => {
        console.log(`Listening on http://${config.host}:${config.port}`);
    });
};

export default boot;
