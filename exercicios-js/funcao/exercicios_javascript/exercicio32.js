/* Exercício 32: Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

media = inteiros => {
    let soma = 0;

    for (let i = 0; i < inteiros.length; i++) {
        soma += inteiros[i];
    }

    return `Média: ${soma / inteiros.length}`
}

let inteiros = [1, 4, 6, 7, 2];

console.log(media(inteiros));