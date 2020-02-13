import express from 'express';
const router = express.Router();
import { createUser, login } from '../controllers/auth.controller';


//api/createUser
router.post('/register', createUser);
//api/login
router.post('/login', login);

export default router;