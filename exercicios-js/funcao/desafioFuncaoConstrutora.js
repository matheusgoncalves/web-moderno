function Pessoa(nome) {
    this.nome = nome; // this.nome é público

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`); 
    }
}

p1 = new Pessoa('Anna'); 
p1.falar(); 