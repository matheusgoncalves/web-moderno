/* Exercício 30: Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

maiorEMenor = inteiros => {
    let maior = inteiros[0];
    let menor = inteiros[0];

    for (let i = 0; i < inteiros.length; i++) {
        if (maior > inteiros[i]) {
            maior = maior;
        } else {
            maior = inteiros[i];
        }

        if (menor < inteiros[i]) {
            menor = menor;
        } else {
            menor = inteiros[i];
        }
    }

    console.log(`Menor número: ${menor}`);
    console.log(`Maior número: ${maior}`);
}

let inteiros = [3, 5, 2, 9, 11, 17];

maiorEMenor(inteiros);