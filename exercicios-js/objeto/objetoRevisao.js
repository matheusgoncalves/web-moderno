// Coleção dinâmica de pares chave/valor
const produto = new Object; 
produto.nome = 'Cadeira'; 
produto['marca do produto'] = 'Generica'; // Evitar atributos com espaço
produto.preco = 220; 

console.log(produto);
delete produto.preco;
delete produto['marca do produto']; 
console.log(produto); 

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul', 
        idade: 21,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Matheus',
        idade: 21
    }, {
        nome: 'Anna',
        idade: 19
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000; // Notação ponto
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'; // Notação alternativa
console.log(carro);

// delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
console.log(carro.condutores);
console.log(carro.condutores.length);