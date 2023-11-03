const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }', // JSON
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retonar um array apenas com os preços

const jsonParaObjeto = objeto => JSON.parse(objeto);
const apenasPrecos = objeto => objeto.preco;

const resultado = carrinho.map(jsonParaObjeto).map(apenasPrecos); // Chama a função map duas vezes, uma para converter o JSON em objeto e outra para retornar apenas os preços

console.log(resultado);