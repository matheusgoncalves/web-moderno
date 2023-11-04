inverter = objeto => {
    parChaveValorInvertido = Object.entries(objeto).map(parChaveValor => parChaveValor.reverse());

    return Object.fromEntries(parChaveValorInvertido);
}

console.log(inverter({ a: 1, b: 2, c: 3 })); // { 1: 'a', 2: 'b', 3: 'c' }