import express from 'express';
import admController from '../controllers/adm.controller.js';

const router = express.Router();

router.patch('/product', admController.patchProduct);
router.delete('/product/:id', admController.deleteProduct);
router.post('/product', admController.createProduct);
router.put('/product', admController.updateProduct);
router.put('/about', admController.updateAbout);
router.put('/contact', admController.updateContact);

export default router;
