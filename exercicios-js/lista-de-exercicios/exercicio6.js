inverso = valor => {
    let boolean = typeof true;
    let number = typeof 10;
    if (typeof valor == boolean) {
        return !valor;
    } else if (valor === 0) {
        return valor;
    } else if (typeof valor == number) {
        return -valor;
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`;
    }
}

console.log(inverso(true)); // false
console.log(inverso("6")); // "booleano ou número esperados, mas o parâmetro é do tipo string"
console.log(inverso(-2000)); // 2000
console.log(inverso("programação")); // "booleano ou número esperados, mas o parâmetro é do tipo string"