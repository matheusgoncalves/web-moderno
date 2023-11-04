function repetir(elemento, quantidade) {
    let numeros = [];
    for(let i = 0; i < quantidade; i++) {
        numeros.push(elemento);
    }
    return numeros;
}

console.log(repetir("código", 2)); // ["código", "código"]
console.log(repetir(7, 3)); // [7, 7, 7]