import { formacoes } from "../data/formacoesData.js";

export const listarFormacoes = () => formacoes;

export function buscarFormacao(id) {
    return formacoes.find(f => f.id == id);
}

export function criarFormacao(data) {
    const id = Date.now();

    const nova = { id, ...data };
    formacoes.push(nova);

    return nova;
}

export function atualizarFormacao(id, data) {
    const formacao = buscarFormacao(id);
    if (!formacao) return null;

    const antigo = formacao.curso;

    Object.assign(formacao, data);

    return { antigo, atualizado: formacao };
}

export function deletarFormacao(id) {
    const index = formacoes.findIndex(f => f.id == id);

    if (index === -1) return null;

    return formacoes.splice(index, 1)[0];
}