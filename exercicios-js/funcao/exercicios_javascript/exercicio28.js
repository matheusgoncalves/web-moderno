/* Exercício 28: Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

parOuImpar = inteiros => {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < inteiros.length; i++) {
        if (inteiros[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }

    console.log(`Pares:\t ${pares}`);
    console.log(`Ímpares: ${impares}`);
}

let inteiros = [1, 3, 4, 5, 8, 10, 16];

parOuImpar(inteiros);