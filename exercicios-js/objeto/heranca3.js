const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai); // Cria um objeto novo tendo como protótipo o objeto pai
filha1.nome = 'Ana'; 
console.log(filha1.corCabelo); 

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true } // writable: false não permite alterar o valor do atributo
})

console.log(filha2.nome);
filha2.nome = 'Carla'; // Não vai alterar o nome
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // O atributo corCabelo foi herdado de pai

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2) { // Percorre todos os atributos do objeto
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`); // hasOwnProperty verifica se o atributo pertence ao objeto
}