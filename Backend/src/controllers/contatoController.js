import * as service from "../services/contatoService.js";

export const getContato = (req, res) => {
    res.json(service.getContato());
};

export const updateContato = (req, res) => {
    const atualizado = service.atualizarContato(req.body);
    res.json(atualizado);
};