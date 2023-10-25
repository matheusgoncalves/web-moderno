console.log(soma (3, 4)); // 7

// Function declaration (função normal) - pode ser chamada antes da declaração
function soma(x, y) {
    return x + y;
}

// Function expression (função anônima)
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3, 4)); // -1

// Named function expression (função anônima com nome) - pouco usada
const mult = function mult(x, y) {
    return x * y; 
}

console.log(mult(3, 4)); // 12