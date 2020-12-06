import express, { Express } from 'express';

import boot from './startup/boot';
import cors from './middlewares/cors';
import routes from './startup/routes';
import syncMigrations from './startup/migrations';

const app: Express = express();

// TODO: remove sensitive information from code or config files
boot(app);
// TODO: sync all models which will create tables in database
syncMigrations();
cors(app);
routes(app);