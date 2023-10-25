function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

// O this é o objeto que está sendo referenciado naquele momento, no caso, o global.
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20; 
global.desc = 0.1;

console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 49990, desc: 0.20 }; 

// Call e Apply são formas de chamar uma função, passando o contexto e os parâmetros.
console.log(getPreco.call(carro)); 
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$')); // Primeiro o contexto, depois os parâmetros separados por vírgula
console.log(getPreco.apply(global, [0.17, '$'])); // Primeiro o contexto, depois os parâmetros dentro de um array