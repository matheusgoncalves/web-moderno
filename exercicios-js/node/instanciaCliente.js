const contadorA = require('./instanciaUnica'); // Retorna um objeto
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')(); // Retorna uma função
const contadorD = require('./instanciaNova')();

contadorA.inc(); 
contadorA.inc();

console.log(contadorA.valor, contadorB.valor); // 3 3

contadorC.inc();
contadorC.inc();

console.log(contadorC.valor, contadorD.valor); // 3 1