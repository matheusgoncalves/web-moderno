/* Exercício 21: Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
e 4) conveniados acima de 60 anos pagam R$130 */

planoDeSaude = adicional => {
    let valor = 100;
    if (adicional < 10) {
        valor += 80;
        return `O valor a ser pago é de R$${valor},00`;
    }

    if (adicional >= 10 && adicional <= 30) {
        valor += 50;
        return `O valor a ser pago é de R$${valor},00`;
    }

    if (adicional > 30 && adicional <= 60) {
        valor += 95;
        return `O valor a ser pago é de R$${valor},00`;
    }

    if (adicional > 60) {
        valor += 130;
        return `O valor a ser pago é de R$${valor},00`;
    }
}

console.log(planoDeSaude(9));
console.log(planoDeSaude(10));
console.log(planoDeSaude(30));
console.log(planoDeSaude(31));
console.log(planoDeSaude(60));
console.log(planoDeSaude(61));