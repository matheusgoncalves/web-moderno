const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Pedro',
        nota: 8.1
    }, {
        nome: 'Anna',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno); 

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])); // concat concatena os arrays

Array.prototype.flatMap = function(callback) { // flatMap não existe nativamente no JS
    return Array.prototype.concat.apply([], this.map(callback)); // concat.apply concatena os arrays
}

const notas2 = escola.flatMap(getNotasDaTurma); // flatMap é um map com um concat
console.log(notas2);