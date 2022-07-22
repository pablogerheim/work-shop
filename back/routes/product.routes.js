import express from "express";
import sessaoController from "../controllers/private.controller.js";

const router = express.Router();

router.get("/", sessaoController.getProduct);

export default router;