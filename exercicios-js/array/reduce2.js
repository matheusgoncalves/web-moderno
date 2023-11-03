const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Desafio 1: Todos os alunos são bolsistas?
// const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(verdadeiro, atual) {
//     if (verdadeiro * atual != 0) {
//         return true;
//     } else {
//         return false;
//     }
// })
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

// Desafio 2: Algum aluno é bolsista?
// const algumBolsista = alunos.map(a => a.bolsista).reduce(function(verdadeiro, atual) {
//     if (verdadeiro + atual != 0) {
//         return true;
//     } else {
//         return false;
//     }
// })
const algumBolsista = (resultado, bolsista) => resultado || bolsista;

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));