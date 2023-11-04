function buscarPalavrasSemelhantes(palavra, array) {
    return array.filter(elemento => elemento.includes(palavra));
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])); // ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])); // []