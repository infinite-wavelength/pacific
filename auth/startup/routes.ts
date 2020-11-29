import express, { Application }from 'express';
import helmet from 'helmet';

import indexRouter from '../routes/index';

const routes = (app:Application) => {
    app.use(express.json());
    app.use(helmet());
    app.use('/api/auth', indexRouter);
};

export default routes;