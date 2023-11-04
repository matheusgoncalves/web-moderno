function removerPropriedade(objeto, propriedade) {
    delete objeto[propriedade];
    return objeto;
}

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));
console.log(removerPropriedade( {
    id: 20,
    nome: "Caneta",
    descricao: "Não preenchido"
}, "descricao"));
console.log(Object.is(removerPropriedade({ a: 1, b: 2 }, "a"), { b: 2 }));