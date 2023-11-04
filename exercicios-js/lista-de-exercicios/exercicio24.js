function contarCaractere(caractere, frase) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === caractere) {
            contador++;
        };
    }
    return contador;
}

console.log(contarCaractere('r', 'A sorte favorece os audazes')); // 2
console.log(contarCaractere('c', 'Conhece-te a ti mesmo')); // 1