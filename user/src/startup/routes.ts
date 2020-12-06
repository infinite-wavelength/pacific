import express, { Express }from 'express';
import helmet from 'helmet';

import indexRouter from '../routes/index';
import noRouter from '../routes/no';
import errorMiddleware from '../middlewares/error';

const routes = (app:Express) => {
    app.use(express.json());
    app.use(helmet());
    app.use('/api/auth', indexRouter);
    app.all('*', noRouter);
    app.use(errorMiddleware);
};

export default routes;