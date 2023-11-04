somaNumeros = array => {
    return array.reduce((acumulador, atual) => acumulador + atual);    
}

console.log(somaNumeros([10, 10, 10])); // 30
console.log(somaNumeros([15, 15, 15, 15])); // 60