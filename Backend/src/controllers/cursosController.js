import * as service from "../services/cursosService.js";

export const getCursos = (req, res) => {
    res.json(service.listarCursos());
};

export const getCursoById = (req, res) => {
    const result = service.buscarCurso(req.params.id);

    if (!result) return res.status(404).json({ erro: "Curso não encontrado" });

    res.json(result);
};

export const postCurso = (req, res) => {
    const novo = service.criarCurso(req.body);

    res.status(201).json(novo);
};

export const patchCurso = (req, res) => {
    const result = service.atualizarCurso(req.params.id, req.body);

    if (!result) return res.status(404).json({ erro: "Curso não encontrado" });

    res.json(result);
};

export const deleteCurso = (req, res) => {
    const result = service.deletarCurso(req.params.id);

    if (!result) return res.status(404).json({ erro: "Curso não encontrado" });

    res.json(result);
};