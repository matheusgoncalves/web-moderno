function estaEntre(numero, minimo, maximo, inclusivo) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

console.log(estaEntre(10, 50, 100)); // true
console.log(estaEntre(16, 100, 160)); // false
console.log(estaEntre(3, 3, 150)); // false
console.log(estaEntre(3, 3, 150, true)); // true