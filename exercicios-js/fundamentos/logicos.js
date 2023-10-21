function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; // || = ou
    const comprarTv50 = trabalho1 && trabalho2; // && = e
    // const comprarTv32 = !!(trabalho1 ^ trabalho2); // ^ = ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2; // != = ou exclusivo
    const manterSaudavel = !comprarSorvete; // negação, operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }; // ES2015, cria um objeto com os atributos
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));