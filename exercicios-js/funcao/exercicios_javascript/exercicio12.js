fatorial = numero => {
    resultado = numero;
    contador = numero - 1;
    for (let i = 1; i < numero; i++) {
        resultado *= contador;
        contador--;
    }
    return resultado;
}

console.log(fatorial(4));