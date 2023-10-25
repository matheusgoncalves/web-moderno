function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0;

    // Método público
    this.acelerar = function () { // this torna o método público
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta; // Se não ultrapassar a velocidade máxima, velocidade atual recebe a velocidade atual + delta
        } else {
            velocidadeAtual = velocidadeMaxima; // Se ultrapassar a velocidade máxima, velocidade atual recebe a velocidade máxima
        }
    };

    // Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro; // Pode omitir os parênteses
uno.acelerar(); 
console.log(uno.getVelocidadeAtual()); // 5

const ferrari = new Carro (350, 20);
ferrari.acelerar(); 
ferrari.acelerar(); 
ferrari.acelerar(); 
console.log(ferrari.getVelocidadeAtual()); // 60

console.log(typeof Carro);
console.log(typeof ferrari);