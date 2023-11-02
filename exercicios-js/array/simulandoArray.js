const quaseArray = { 0: 'Rafael', 1: 'Anna', 2: 'Bia' }; 
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString', { // Define a função toString para o objeto quaseArray
    value: function() { return Object.values(this) },
    enumerable: false// Não permite que a função toString seja listada
});

console.log(quaseArray[0]); 

const meuArray = ['Rafael', 'Ana', 'Bia'];
console.log(quaseArray.toString(), meuArray);