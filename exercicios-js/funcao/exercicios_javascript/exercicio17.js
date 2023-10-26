/* Exercício 17: Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento; A 10%; B 15%; C 20%; 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. */

function aumento(planoDeTrabalho, salarioAtual) {
    let novoSalario = 0;
    
    switch(planoDeTrabalho) {
        case 'A':
            novoSalario = salarioAtual + (salarioAtual * 0.10);
            console.log(novoSalario);
            break;
        case 'B':
            novoSalario = salarioAtual + (salarioAtual * 0.15);
            console.log(novoSalario);
            break;
        case 'C':
            novoSalario = salarioAtual + (salarioAtual * 0.20);
            console.log(novoSalario);
            break;
    }
}

aumento('C', 1280);