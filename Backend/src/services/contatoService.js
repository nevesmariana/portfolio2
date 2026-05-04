import { contato } from "../data/contatoData.js";

export const getContato = () => contato;

export const atualizarContato = (data) => {
    Object.assign(contato, data);
    return contato;
};