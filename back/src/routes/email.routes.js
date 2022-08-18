import express from "express";
import emailController from "../controllers/email.controller.js";
//import sessaoController from "../controllers/login.controller.js";

const router = express.Router();

router.get("/", emailController.getEmail)
router.get("/lastId", emailController.getLastId)
router.delete("/:id", emailController.deleteEmail)
router.patch("/", emailController.patchEmail)
router.put("/", emailController.updateEmail)
    //router.post("/adm/register", sessaoController.register);

export default router;