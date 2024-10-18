
import { conect } from ";/conect.js";

const lista = document.querySelector("[data-lista]");

export default function criaRelacao(nome, descricao, imagem, tag) {
    const card = document.createElement("div");
    card.className = "principal-relacoes-mural-card";
    card.innerHTML = `
    <img src="${imagem}" alt="Foto de ${nome}">
    <h3 class="principal-relacoes-mural-card-titulo">${nome}</h3>
    <h4 class="principal-relacoes-mural-card-descricao">${descricao}</h4>
    <span class="principal-relacoes-mural-card-tag">${tag}</span>
    `
    return card;
}

async function listaRelacoes() {
    const listaApi = await conect.listaRelacoes();
    listaApi.forEach(elemento => lista.appendChild(
        criaRelacao(elemento.nome, elemento.descricao, elemento.imagem, elemento.tag)
    ));
}


listaRelacoes();