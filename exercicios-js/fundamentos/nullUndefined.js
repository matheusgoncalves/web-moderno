let valor; // Não inicializada
console.log(valor); // Undefined

valor = null; // Ausência de valor
console.log(valor); // Null
// console.log(valor.toString()); // Erro!

const produto = {};
console.log(produto.preco); // Undefined
console.log(produto); // {}

produto.preco = 3.50;
console.log(produto); // { preco: 3.5 }

produto.preco = undefined; // Evitar atribuir undefined
console.log(!!produto.preco); // False
// delete produto.preco; // Remove o atributo
console.log(produto); // {}

produto.preco = null; // Sem preço
console.log(!!produto.preco); // False
console.log(produto); // { preco: null }