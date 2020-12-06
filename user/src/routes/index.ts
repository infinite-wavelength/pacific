import { Router } from 'express';
import { login, signup, logout, deleteUser, updatePassword, updateRole, deactivateUser } from '../controllers/index';

const router:Router = Router();

router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
router.delete('/user/delete/:', deleteUser);
router.put('/signup', updatePassword);
router.put('/logout', updateRole);
router.get('/login', deactivateUser);

export default router;
