/* Exercício 20: Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

notas = valor => {
    let cemReais, cinquentaReais, dezReais, cincoReais, umReal;
    cemReais = cinquentaReais = dezReais = cincoReais = umReal = 0;

    if (valor >= 100) {
        while (valor >= 100) {
            valor -= 100;
            cemReais++;
        }
        console.log(`${cemReais} notas de R$100,00`);
    }

    if (valor >= 50) {
        while (valor >= 50) {
            valor -= 50;
            cinquentaReais++;
        }
        console.log(`${cinquentaReais} notas de R$50,00`);
    }

    if(valor >= 10) {
        while (valor >= 10) {
            valor -= 10;
            dezReais++;
        }
        console.log(`${dezReais} notas de R$10,00`);
    }

    if(valor >= 5) {
        while (valor >= 5) {
            valor -= 5;
            cincoReais++;
        }
    console.log(`${cincoReais} notas de R$5,00`);
    }

    if(valor >= 1) {
        umReal = valor;
        console.log(`${umReal} notas de R$1,00`);
    }
}

notas(234);