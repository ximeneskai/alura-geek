
async function listaRelacoes() {

    const conexao = await fetch("http://localhost:3000/relacoes");
    const relacoes = await conexao.json();

    return relacoes;
}

async function adicionaRelacao(nome, descricao, imagem, tag) { 

    const conexao = await fetch('http://localhost:3000/relacoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            descricao: descricao,
            imagem: imagem,
            tag: tag
        })
    });

    const novaRelacao = await conexao.json();

    return novaRelacao;
}

export const conect = {
    listaRelacoes, 
    adicionaRelacao
};