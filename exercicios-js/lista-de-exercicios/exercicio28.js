filtrarPorQuantidadeDeDigitos = (array, quantidade) => {
    return array.filter(elemento => String(elemento).length === quantidade);
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)); // [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)); // [5, 9, 1]