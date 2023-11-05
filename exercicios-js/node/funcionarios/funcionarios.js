const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;

    // Mulher chinesa com menor salário?
    const funcionario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

    console.log(funcionario);
});

const chineses = funcionarios => funcionarios.pais === 'China';
const mulheres = funcionarios => funcionarios.genero === 'F';
const menorSalario = (funcionarios, funcionarioAtual) => {
    return funcionarios.salario < funcionarioAtual.salario ? funcionarios : funcionarioAtual;
}