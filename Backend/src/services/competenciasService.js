import { competencias } from "../data/competenciasData.js";

export const listarCompetencias = () => competencias;

export function buscarCompetencia(id) {
    return competencias.find(c => c.id == id);
}

export function criarCompetencia(data) {
    const nova = {
        id: Date.now(),
        ...data
    };

    competencias.push(nova);
    return nova;
}

export function atualizarCompetencia(id, data) {
    const comp = buscarCompetencia(id);

    if (!comp) return null;

    Object.assign(comp, data);

    return comp;
}

export function deletarCompetencia(id) {
    const index = competencias.findIndex(c => c.id == id);

    if (index === -1) return null;

    return competencias.splice(index, 1)[0];
}