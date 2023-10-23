const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); // Bom dia!
const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa); // bind() é responsável por amarrar um determinado objeto para ele ser o dono da execução daquele método sempre que ele for chamado, aponta o this para o objeto passado por parâmetro
falarDePessoa(); // Bom dia!