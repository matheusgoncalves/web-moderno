despesasTotais = array => {
    const preco = array => array.preco;
    return array.map(preco).reduce((acumulador, atual) => acumulador + atual);
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150},
])); // 239.99

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90},
])); // 34599.89