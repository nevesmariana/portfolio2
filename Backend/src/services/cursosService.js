import { cursos } from "../data/cursosData.js";

export const listarCursos = () => cursos;

export function buscarCurso(id) {
    return cursos.find(c => c.id == id);
}

export function criarCurso(data) {
    const id = Date.now();

    const novo = { id, ...data };
    cursos.push(novo);

    return novo;
}

export function atualizarCurso(id, data) {
    const curso = buscarCurso(id);
    if (!curso) return null;

    const antigo = curso.titulo;

    Object.assign(curso, data);

    return {
        antigo,
        atualizado: curso
    };
}

export function deletarCurso(id) {
    const index = cursos.findIndex(c => c.id == id);

    if (index === -1) return null;

    return cursos.splice(index, 1)[0];
}