import { Router } from "express";
import * as controller from "../controllers/cursosController.js";

const router = Router();

router.get("/", controller.getCursos);
router.get("/:id", controller.getCursoById);
router.post("/", controller.postCurso);
router.patch("/:id", controller.patchCurso);
router.delete("/:id", controller.deleteCurso);

export default router;