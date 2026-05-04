import { Router } from "express";
import * as controller from "../controllers/formacoesController.js";

const router = Router();

router.get("/", controller.getFormacoes);
router.get("/:id", controller.getFormacaoById);
router.post("/", controller.postFormacao);
router.patch("/:id", controller.patchFormacao);
router.delete("/:id", controller.deleteFormacao);

export default router;