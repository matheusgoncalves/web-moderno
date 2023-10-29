/* Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5. */
let vetorNumericos = [1, 3, 5, 7, 10];

function multiplicacao(vetor, inteiro) {
    vetorMult = 1;

    for (let i = 0; i < vetor.length; i++) {
        vetorMult *= vetor[i];
    }

    return `Resultado da multiplicação: ${vetorMult}`;
}

function maiorQue5(vetor, inteiro) {
    vetorMult = 1;
    
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 5) {
            vetorMult *= vetor[i];
        }
    }

    return `Resultado da multiplicação (para os números maiores que 5): ${vetorMult}`;
}

console.log(multiplicacao(vetorNumericos, 3));
console.log(maiorQue5(vetorNumericos, 3));