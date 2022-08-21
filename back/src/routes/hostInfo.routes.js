import express from 'express';
import hostInfoController from '../controllers/hostInfo.controller.js';

const router = express.Router();

router.get('/product', hostInfoController.getProduct);
router.get('/product/:id', hostInfoController.getProduct);
router.get('/about', hostInfoController.getAbout);
router.get('/contact', hostInfoController.getContact);

export default router;
