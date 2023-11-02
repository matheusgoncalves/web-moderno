class Lancamento {
    constructor (nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
};

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos (...lancamentos) { // Recebe um ou mais lançamentos
        lancamentos.forEach(l => this.lancamentos.push(l)); // Adiciona os lançamentos
    }

    sumario() { // Retorna o valor consolidado
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor; // Soma os valores dos lançamentos
        });
        return valorConsolidado; 
    }
};

const salario = new Lancamento('Salário', 45000); 
const contadeLuz = new Lancamento('Luz', -220); 

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contadeLuz); // Adiciona os lançamentos

console.log(contas.sumario()); // 44780