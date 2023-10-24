let comparaComThis = function (param) { 
    console.log(this === param); 
}

comparaComThis(global); // true

const obj = {}; 
comparaComThis = comparaComThis.bind(obj); // Não aponta mais para o global
comparaComThis(global); // false
comparaComThis(obj); // true

let comparaComThisArrow = param => console.log(this === param); // Função arrow não aponta para o global
comparaComThisArrow(global); // false
comparaComThisArrow(module.exports); // true

comparaComThisArrow = comparaComThisArrow.bind(obj); // Mesmo que tente mudar o contexto, não vai mudar, pois a função arrow é mais forte
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);