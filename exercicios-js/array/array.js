console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Anna'); // Não é recomendado
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Anna'];
console.log(aprovados[0]); // Bia
console.log(aprovados[1]); // Carlos
console.log(aprovados[2]); // Ana
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo';
aprovados.push('Sofia');
console.log(aprovados.length); // 5

aprovados[9] = 'Rafael';
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined); // true

console.log(aprovados);
aprovados.sort(); // .sort() altera o array original, ordenando-o
console.log(aprovados);

delete aprovados[1]; // O elemento não é removido, apenas fica undefined
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // Carlos

aprovados = ['Bia', 'Carlos', 'Anna'];
aprovados.splice(1, 1); // .splice() remove e adiciona elementos no array
console.log(aprovados);