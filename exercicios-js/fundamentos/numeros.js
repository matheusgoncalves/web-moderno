const peso1 = 1.0;
const peso2 = Number('2.0'); // Converte a string para número

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Retorna true se o número for inteiro
console.log(Number.isInteger(peso2)); // Retorna true se o número for inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2; // Calcula o total
const media = total / (peso1 + peso2); // Calcula a média

console.log(media.toFixed(2)); // Define a quantidade de casas decimais
console.log(media.toString(2)); // Em binário
console.log(typeof media); // Retorna o tipo do dado
console.log(typeof Number); // Retorna o tipo da função