import express from 'express';
import sessaoController from '../controllers/login.controller.js';
import emailController from '../controllers/email.controller.js';

const router = express.Router();

router.post('/', sessaoController.login);
router.post('/email', emailController.createEmail);

export default router;
