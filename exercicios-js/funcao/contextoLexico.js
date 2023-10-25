const valor = 'Global'; 

function minhaFuncao() { 
    console.log(valor); // Se não encontrar a variável no escopo local, vai procurar no escopo mais abrangente, no caso, o escopo global.
}

function exec() { 
    const valor = 'Local';
    minhaFuncao(); // Apesar de estar dentro de uma função, a função minhaFuncao() vai procurar a variável valor no escopo global.
}

exec(); // Global