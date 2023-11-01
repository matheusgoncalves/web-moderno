function meuObjeto() { };
console.log(meuObjeto.prototype); // O atributo prototype de uma função aponta para um objeto vazio

const obj1 = new meuObjeto; // Instância de uma função aponta para o prototype da função
const obj2 = new meuObjeto; 
console.log(obj1.__proto__ === obj2.__proto__);
console.log(meuObjeto.prototype === obj1.__proto__); 

meuObjeto.prototype.nome = 'Anônimo';
meuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`); // this.nome é o nome do objeto que chamou a função
}

obj1.falar();

obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {};
obj3.__proto__ = meuObjeto.prototype; // Estabelece a relação de protótipo entre obj3 e meuObjeto.prototype
obj3.nome = 'Obj3';
obj3.falar();

// Resumindo a loucura...
console.log((new meuObjeto).__proto__ === meuObjeto.prototype); // Instância de uma função aponta para o prototype da função
console.log(meuObjeto.__proto__ === Function.prototype); // Função é um objeto
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null); // Não tem mais nada acima do Object.prototype