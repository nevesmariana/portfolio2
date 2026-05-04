import { projetos } from "../data/projetosData.js";

export const listarProjetos = () => projetos;

export function buscarProjeto(id) {
    return projetos.find(p => p.id == id);
}

export function criarProjeto(data) {
    const id = Date.now();

    const novo = { id, ...data };
    projetos.push(novo);

    return novo;
}

export function atualizarProjeto(id, data) {
    const projeto = buscarProjeto(id);
    if (!projeto) return null;

    const antigo = projeto.titulo;

    Object.assign(projeto, data);

    return {
        antigo,
        atualizado: projeto
    };
}

export function deletarProjeto(id) {
    const index = projetos.findIndex(p => p.id == id);

    if (index === -1) return null;

    return projetos.splice(index, 1)[0];
}