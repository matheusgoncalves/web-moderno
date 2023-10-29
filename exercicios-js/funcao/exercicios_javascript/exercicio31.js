/* Exercício 31: Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console. */

qtdNegativos = inteiros => {
    let negativos = 0;

    for (let i = 0; i < inteiros.length; i++) {
        if (inteiros[i] < 0) {
            negativos++;
        }
    }

    console.log(`${negativos} números negativos.`)
}

let inteiros = [1, -3, 5, -7, 9];

qtdNegativos(inteiros);