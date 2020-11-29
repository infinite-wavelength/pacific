import express, {Router} from 'express';
import { login, signup, logout } from '../controllers/index';

const router:Router = express.Router();

router.get('/login', login);
router.get('/signup', signup);
router.get('/logout', logout);

export default router;
