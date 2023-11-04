receberMelhorEstudante = (estudantes) => {
    let estudante = { nome: '', media: 0 };
    for (let i in estudantes) {
        let media = estudantes[i].reduce((acumulador, atual) => acumulador + atual) / estudantes[i].length;
        if (media > estudante.media) {
        estudante.nome = i;
        estudante.media = media;
        }
    }
    return estudante;
    }

console.log(receberMelhorEstudante({ Joao: [8, 7.6, 8.9, 6], Mariana: [9, 6.6, 7.9, 8], Carla: [7, 7, 8, 9] })); // { nome: 'Mariana', media: 7.875