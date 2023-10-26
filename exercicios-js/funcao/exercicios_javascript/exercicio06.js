/* Exercício 06: Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. */

function simples(capital, juros, tempo) {
    jurosSimples = capital * juros * tempo;
    console.log(jurosSimples);
}

function compostos(capital, juros, tempo) {
    jurosCompostos = capital * (1 + juros)**tempo;
    console.log(jurosCompostos);
}

simples(10000, 0.05, 1);
compostos(10000, 0.05, 1);