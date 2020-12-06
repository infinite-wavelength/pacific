import { Router } from 'express';
import { noRoute } from '../controllers/no';

const router:Router = Router();

router.all('*', noRoute);

export default router;
