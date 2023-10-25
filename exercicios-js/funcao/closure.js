// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x; // A função dentro() vai procurar a variável x no escopo mais abrangente, no caso, o escopo da função fora().
    }
    return dentro;
}

const minhaFuncao = fora(); // A variável minhaFuncao recebe o retorno da função fora(), que é a função dentro().
console.log(minhaFuncao()); // Local