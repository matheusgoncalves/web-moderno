// function criarProduto(nome, preco) {
//     const desconto = 0.1;
//     return {
//         nome: `${nome}`,
//         preco: `${preco - (preco * desconto)}`
//     };
// }

// console.log(criarProduto('Notebook', 2800));
// console.log(criarProduto('Televisao', 1500));

function criarProduto(nome, preco) {
        return {
            nome,
            preco,
            desconto: 0.1
        };
    }
    
    console.log(criarProduto('Notebook', 2800));
    console.log(criarProduto('Televisao', 1500));