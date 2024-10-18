import { conect } from ";/conect.js";
const formulario = document.querySelector('[data-formulario]');

async function criaNovaRelacao(evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const descricao = document.querySelector('[data-descricao]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const tag = document.querySelector('[data-tag]').value;

    await conect.adicionaRelacao(nome, descricao, imagem, tag);
    alert('Relação adicionada com sucesso!');
    window.location.reload();
}

formulario.addEventListener("submit", evento => criaNovaRelacao(evento));