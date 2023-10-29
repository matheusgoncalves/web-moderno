/* Exercício 40: Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

conceitoNotas = vetorNotas => {
    
    for(let i = 0; i < vetorNotas.length; i++) {
        if (vetorNotas[i] < 5) {
            console.log(`Conceito da nota ${vetorNotas[i]}: D`);
        } else if (vetorNotas[i] >= 5 && vetorNotas[i] < 7) {
            console.log(`Conceito da nota ${vetorNotas[i]}: C`);
        } else if (vetorNotas[i] >= 7 && vetorNotas[i] < 9) {
            console.log(`Conceito da nota ${vetorNotas[i]}: B`);
        } else {
            console.log(`Conceito da nota ${vetorNotas[i]}: A`);
        }
    }
}

let vetorNotas = [1, 5, 6.9, 8, 10];

conceitoNotas(vetorNotas);