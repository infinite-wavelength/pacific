import { Express } from 'express';
import config from 'config';
import ERRORS from '../config/errors';
import sequelize from '../connections/db';

const boot = (app: Express) => {
    const protocol: string = config.get('protocol');
    const host: string = config.get('host');
    const port: number = config.get('port');

    app.listen(port, async () => {
        try {
            await sequelize.authenticate();
            console.log(`Listening on ${protocol}://${host}:${port}`);
        } catch (error) {
            console.log(ERRORS.DB_CONNECTION.reason, ':', ERRORS.DB_CONNECTION.description);
            process.exit(1);
        }
    }).on('error', () => {
        console.log(ERRORS.APP_ERROR.reason, ':', ERRORS.APP_ERROR.description);
        process.exit(1);
    });
};

export default boot;
