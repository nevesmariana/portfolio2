import * as service from "../services/competenciasService.js";

export const getCompetencias = (req, res) => {
    res.json(service.listarCompetencias());
};

export const getCompetenciaById = (req, res) => {
    const comp = service.buscarCompetencia(req.params.id);

    if (!comp) return res.status(404).json({ erro: "Não encontrado" });

    res.json(comp);
};

export const postCompetencia = (req, res) => {
    const nova = service.criarCompetencia(req.body);
    res.status(201).json(nova);
};

export const patchCompetencia = (req, res) => {
    const atualizada = service.atualizarCompetencia(req.params.id, req.body);

    if (!atualizada)
        return res.status(404).json({ erro: "Não encontrado" });

    res.json(atualizada);
};

export const deleteCompetencia = (req, res) => {
    const deletada = service.deletarCompetencia(req.params.id);

    if (!deletada)
        return res.status(404).json({ erro: "Não encontrado" });

    res.json(deletada);
};