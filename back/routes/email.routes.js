import express from "express";
import emailController from "../controllers/email.controller.js";

const router = express.Router();

router.get("/", emailController.getEmail)
router.delete("/:id", emailController.deleteEmail)
router.patch("/", emailController.patchEmail)
router.post("/", emailController.createEmail)
router.put("/", emailController.updateEmail)



export default router;