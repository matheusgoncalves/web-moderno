// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1; // Se a for falso, atribui 1
    b = b || 1; // Se b for falso, atribui 1
    c = c || 1; // Se c for falso, atribui 1
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)); // 3 5 6 3

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1; // Se a for diferente de undefined, atribui a, senão atribui 1
    b = 1 in arguments ? b : 1; // Se b for diferente de undefined, atribui b, senão atribui 1
    c = isNaN(c) ? 1 : c; // Se c for um NaN, atribui 1, senão atribui c
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c; 
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));