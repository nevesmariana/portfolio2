import * as service from "../services/formacoesService.js";

export const getFormacoes = (req, res) => {
    res.json(service.listarFormacoes());
};

export const getFormacaoById = (req, res) => {
    const result = service.buscarFormacao(req.params.id);

    if (!result) return res.status(404).json({ erro: "Não encontrado" });

    res.json(result);
};

export const postFormacao = (req, res) => {
    const nova = service.criarFormacao(req.body);

    res.status(201).json(nova);
};

export const patchFormacao = (req, res) => {
    const result = service.atualizarFormacao(req.params.id, req.body);

    if (!result) return res.status(404).json({ erro: "Não encontrado" });

    res.json(result);
};

export const deleteFormacao = (req, res) => {
    const result = service.deletarFormacao(req.params.id);

    if (!result) return res.status(404).json({ erro: "Não encontrado" });

    res.json(result);
};