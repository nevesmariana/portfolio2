import { Router } from "express";
import * as controller from "../controllers/competenciaController.js";

const router = Router();

router.get("/", controller.getCompetencias);
router.get("/:id", controller.getCompetenciaById);
router.post("/", controller.postCompetencia);
router.patch("/:id", controller.patchCompetencia);
router.delete("/:id", controller.deleteCompetencia);

export default router;