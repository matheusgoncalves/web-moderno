let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

// O número 1 é verdadeiro
isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!''); // String vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar...');
console.log(!!('' || null || 0 || ' ')); // Retorna o primeiro valor verdadeiro

let nome = '';
console.log(nome || 'Desconhecido'); // Retorna o primeiro valor verdadeiro