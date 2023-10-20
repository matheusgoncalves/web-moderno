const valores = [7.7, 8.9, 6.3, 9.2]; // Array é um objeto
console.log(valores[0], valores[3]);
console.log(valores[4]); // Retorna undefined

valores[4] = 10;
console.log(valores);
console.log(valores.length); // Retorna o tamanho do array

valores.push({id: 3}, false, null, 'teste'); // Adiciona elementos ao array
console.log(valores);

console.log(valores.pop()); // Remove o último elemento do array
delete valores[0]; // Remove o elemento do array
console.log(valores);

console.log(typeof valores); // Retorna o tipo do array (object)