function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40])); // 40
console.log(rand([992])); // 992, pois o valor mínimo é 992 e o máximo é 1000
console.log(rand([, 10])); // 10, pois o valor mínimo é 0 e o máximo é 10
console.log(rand([]));
// console.log(rand()); // Não funciona, pois não foi passado um array como parâmetro