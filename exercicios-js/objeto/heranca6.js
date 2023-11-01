function Aula(nome, videoID) {
    this.nome = nome; // this torna a variável pública
    this.videoID = videoID;
}

const aula1 = new Aula('Bem Vindo', 123); // new cria um objeto a partir de uma função construtora
const aula2 = new Aula('Até Breve', 456); 
console.log(aula1, aula2); 

// Simulando o new
function novo(f, ...params) { // ...params é um operador rest
    const obj = {}; // Cria um objeto vazio
    obj.__proto__ = f.prototype; // Associa o protótipo do objeto ao protótipo da função
    f.apply(obj, params); // Executa a função passando o objeto e os parâmetros
    return obj; // Retorna o objeto
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);