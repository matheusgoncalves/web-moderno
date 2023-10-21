// novo recurso do ES2015

const pessoa = {
    nome: 'Anna',
    idade: 19,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

const { nome: n, idade: i } = pessoa; // Tire de dentro do objeto pessoa os atributos nome e idade
console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa; // Tire de dentro do objeto pessoa os atributos sobrenome e bemHumorada
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep } } = pessoa; // Tire de dentro do objeto pessoa os atributos logradouro, numero e cep
console.log(logradouro, numero, cep);

const { conta: { ag, num } } = pessoa; // Tire de dentro do objeto pessoa os atributos ag e num
console.log(ag, num);