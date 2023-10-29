/* Exercício 29: Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações. */

estaNoIntervalo = vetor => {
    let dentro = 0;
    let fora = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++;
        } else {
            fora++;
        }
    }

    console.log(`${dentro} números dentro do intervalo.`)
    console.log(`${fora} números fora do intervalo.`)
}

let vetor = [5, 9, 12, 15, 16, 19, 20, 29];

estaNoIntervalo(vetor);