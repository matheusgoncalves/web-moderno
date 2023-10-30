// Pessoa -> 123 -> {...}
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro'; 
console.log(pessoa); 

// Pessoa -> 456 -> {...}
// pessoa = { nome: 'Anna' };

Object.freeze(pessoa); // Congela o objeto, não permitindo alterações

pessoa.nome = 'Maria'; // Não altera
pessoa.end = 'Rua ABC'; // Não adiciona
delete pessoa.nome; // Não deleta

console.log(pessoa.nome); 
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'João' }); // Já cria o objeto congelado
pessoaConstante.nome = 'Maria'; // Não altera
console.log(pessoaConstante);