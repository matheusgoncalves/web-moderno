const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsita: true },
    { nome: 'Pedro', nota: 9.8, bolsita: false },
    { nome: 'Anna', nota: 9.3, bolsita: true }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) { // reduce recebe dois parâmetros, o acumulador e o atual
    console.log(acumulador, atual); 
    return acumulador + atual;
}, 0);

console.log(resultado); // 45.6