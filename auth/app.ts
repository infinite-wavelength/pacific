import express, { Application } from 'express';

import boot from './startup/boot';
import cors from './middlewares/cors';
import routes from './startup/routes';

const app: Application = express();

boot(app);
cors(app);
routes(app);