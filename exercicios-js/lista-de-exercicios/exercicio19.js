calcularMedia = array => {
    return array.reduce((acumulador, atual) => acumulador + atual) / array.length;
}

console.log(calcularMedia([0, 10])); // 5
console.log(calcularMedia([1, 2, 3, 4, 5])); // 3