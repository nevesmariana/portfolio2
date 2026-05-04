import * as service from "../services/projetosService.js";

export const getProjetos = (req, res) => {
    res.json(service.listarProjetos());
};

export const getProjetoById = (req, res) => {
    const result = service.buscarProjeto(req.params.id);

    if (!result) return res.status(404).json({ erro: "Projeto não encontrado" });

    res.json(result);
};

export const postProjeto = (req, res) => {
    const novo = service.criarProjeto(req.body);

    res.status(201).json(novo);
};

export const patchProjeto = (req, res) => {
    const result = service.atualizarProjeto(req.params.id, req.body);

    if (!result) return res.status(404).json({ erro: "Projeto não encontrado" });

    res.json(result);
};

export const deleteProjeto = (req, res) => {
    const result = service.deletarProjeto(req.params.id);

    if (!result) return res.status(404).json({ erro: "Projeto não encontrado" });

    res.json(result);
};