// Factory simples
function criarPessoa() { // Função factory é uma função que retorna um objeto
    return {
        nome: 'Anna',
        sobrenome: 'Poletto'
    };
};

console.log(criarPessoa());