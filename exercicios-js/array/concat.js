const filhas = ['Valeskah', 'Ártemis'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos, 'Fulano'); // Concatena os arrays filhas e filhos em um novo array chamado todos
console.log(todos, filhas, filhos); // Não altera os arrays originais

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));