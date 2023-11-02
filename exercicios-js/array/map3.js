// Implementando a função Map
Array.prototype.map2 = function(callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray; 
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }', // JSON
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retonar um array apenas com os preços

const jsonParaObjeto = objeto => JSON.parse(objeto);
const apenasPrecos = objeto => objeto.preco;

const resultado = carrinho.map2(jsonParaObjeto).map2(apenasPrecos);

console.log(resultado);