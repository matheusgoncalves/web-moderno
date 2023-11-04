receberPrimeiroEUltimoElementos = array => {
    let novoArray = [];

    novoArray.push(array[0]);
    novoArray.push(array[array.length - 1]);

    return novoArray;
}

console.log(receberPrimeiroEUltimoElementos([7, 14, "olá"])); // [7, "olá"]
console.log(receberPrimeiroEUltimoElementos([-100, "aplicativo", 16])); // [-100, 16]