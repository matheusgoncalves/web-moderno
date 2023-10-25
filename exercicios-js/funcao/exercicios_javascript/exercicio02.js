/* Exercício 02: Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). */

function tipoDoTriangulo(a, b, c) {
    if (a != 0 && b != 0 && c != 0) {
        if (a == b && b == c) {
            console.log('Equilátero');
        } else if ((a == b && a != c) || (a == c && a != b) || (b == a && b != c) || (b == c && b != a)) {
            console.log('Isósceles');
        } else {
            console.log('Escaleno');
        }
    } else {
        console.log('Não é um triângulo.');
    }
}

tipoDoTriangulo(3, 3, 0);