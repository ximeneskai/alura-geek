import { conect } from "./conect.js";

const lista = document.querySelector("[data-lista]");

function criaRelacao(nome, descricao, imagem, tag, id) {
    const card = document.createElement("div");
    card.className = "principal-relacoes-mural-card";
    card.innerHTML = `
    <img src="${imagem}" alt="Foto de ${nome}">
    <h3 class="principal-relacoes-mural-card-titulo">${nome}</h3>
    <h4 class="principal-relacoes-mural-card-descricao">${descricao}</h4>
    <span class="principal-relacoes-mural-card-tag">${tag}</span>
    <button class="principal-relacoes-mural-card-botao" data-excluir></button>
    `

    const botaoExcluir = card.querySelector("[data-excluir]");
    botaoExcluir.addEventListener("click", () => excluirRelacao(id, card));

    return card;
}


async function listaRelacoes() {
    const listaApi = await conect.listaRelacoes();
    listaApi.forEach(elemento => lista.appendChild(
        criaRelacao(elemento.nome, elemento.descricao, elemento.imagem, elemento.tag)
    ));
}

async function excluirRelacao(id, card) {
    if (confirm("Tem certeza que deseja excluir essa relação?")) {
        await fetch(`http://localhost:3000/relacoes/${id}`, {
            method: 'DELETE',
        });

        lista.removeChild(card);}}

listaRelacoes();