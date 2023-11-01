const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // Retorna as chaves do objeto
console.log(Object.values(pessoa)); // Retorna os valores do objeto
console.log(Object.entries(pessoa)); // Retorna um array com os subarrays [chave, valor]

Object.entries(pessoa).forEach(([chave, valor]) => { // Percorre o array de subarrays e desestrutura cada subarray em chave e valor
    console.log(`${chave}: ${valor}`); 
});

Object.defineProperty(pessoa, 'dataNascimento', { // Define uma propriedade
    enumerable: true, // Permite que a propriedade seja listada
    writable: false, // Permite que a propriedade seja alterada
    value: '01/01/2019' // Valor da propriedade
});

pessoa.dataNascimento = '01/01/2017'; // Não altera o valor da propriedade, pois writable é false
console.log(pessoa.dataNascimento); 
console.log(Object.keys(pessoa)); // A propriedade é listada, pois enumerable é true

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj); // Congela o objeto, não permitindo alterações
obj.c = 1234; // Não altera o valor do atributo
console.log(obj); // Retorna o objeto de destino com os atributos dos outros objetos