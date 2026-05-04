import { Router } from "express";
import * as controller from "../controllers/contatoController.js";

const router = Router();

router.get("/", controller.getContato);
router.patch("/", controller.updateContato);

export default router;