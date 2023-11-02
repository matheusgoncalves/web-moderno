const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3}

// console.log(JSON.parse("{ a: 1, b: 2, c? 3 }")); // Erro de sintaxe
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); // Erro de sintaxe, pois o JSON exige aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')); // { a: 1, b: 2, c: 3 } (Objeto gerado a partir de um JSON)
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')); // Atributos e valores podem ser strings, booleanos, objetos e arrays, porém as strings devem estar entre aspas duplas