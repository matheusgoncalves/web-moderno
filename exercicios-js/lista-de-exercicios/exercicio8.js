function multiplicar(numero1, numero2) {
    let resultado = 0;
    for(let i = 0; i < numero2; i++) {
        resultado += numero1;
    }
    return resultado;
}

console.log(multiplicar(5, 5)); // 25
console.log(multiplicar(0, 7)); // 0