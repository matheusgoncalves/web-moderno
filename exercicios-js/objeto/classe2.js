class avo { // Superclasse
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class pai extends avo { // Subclasse
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome); // Chama o construtor da superclasse
        this.profissao = profissao;
    }
}

class filho extends pai { // Subclasse
    constructor() {
        super('Silva'); // Chama o construtor da superclasse
    }
}

const filho1 = new filho;
console.log(filho1); // filho { sobrenome: 'Silva', profissao: 'Professor' }