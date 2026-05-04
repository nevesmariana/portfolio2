import { Router } from "express";
import * as controller from "../controllers/projetosController.js";

const router = Router();

router.get("/", controller.getProjetos);
router.get("/:id", controller.getProjetoById);
router.post("/", controller.postProjeto);
router.patch("/:id", controller.patchProjeto);
router.delete("/:id", controller.deleteProjeto);

export default router;