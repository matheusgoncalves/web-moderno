objetoParaArray = objeto => {
    let array = [];
    for (let chave in objeto) {
        array.push([chave, objeto[chave]]);
    }
    return array;
}

console.log(objetoParaArray({ nome: "Maria", profissao: "Desenvolvedora de software" })); // [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]];
console.log(objetoParaArray({ codigo: 11111, preco: 12000 })); // [["codigo", 11111], ["preco", 12000]];