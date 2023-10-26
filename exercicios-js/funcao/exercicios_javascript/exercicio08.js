/* Exercício 08: Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo). */

let pontuacoes = "3, 7, 3, 1";

comparandoValores = pontuacoes => {
    let pontos = pontuacoes.split(',');
    let quebraDeRecordes = 0;
    let piorJogo = 1;
    resultado = [];

    // Loop para retornar o número de vezes que bateu o recorde e analisar qual foi o pior jogo
    for (let i = 1; i <= pontos.length; i++) {
        if (parseInt(pontos[i]) > parseInt(pontos[i-1])) {
            quebraDeRecordes++;
        } else if (parseInt(pontos[i]) < parseInt(pontos[0])) {
            piorJogo = i + 1;
        }
    }
    resultado.push(quebraDeRecordes);
    resultado.push(piorJogo);
    console.log(resultado);
}

comparandoValores(pontuacoes);