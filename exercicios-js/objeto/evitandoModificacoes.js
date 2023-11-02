// Object.preventExtensions
const produto = Object.preventExtensions({ // Não permite adicionar novos atributos
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
}); 
console.log('Extensível:', Object.isExtensible(produto)); // Extensível: false

produto.nome = 'Borracha'; // É permitido alterar os atributos
produto.descricao = 'Borracha escolar branca'; // Não é permitido adicionar novos atributos
delete produto.tag; // É permitido excluir atributos
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa); // Não permite adicionar ou excluir atributos, mas permite alterar os valores dos atributos existentes
console.log('Selado:', Object.isSealed(pessoa)); // Selado: true

pessoa.sobrenome = 'Silva'; // Não é permitido adicionar novos atributos
delete pessoa.nome; // Não é permitido excluir atributos
pessoa.idade = 29; // É permitido alterar os valores dos atributos
console.log(pessoa); // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes (não é permitido alterar os valores dos atributos nem adicionar ou excluir atributos)