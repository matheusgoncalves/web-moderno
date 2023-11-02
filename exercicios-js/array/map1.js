const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map(function(e) { // map gera um novo array com a mesma quantidade de elementos
    return e * 2; // Multiplica cada elemento do array por 2
})

console.log(resultado, nums);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro); // Chama a função map 3 vezes
console.log(resultado);