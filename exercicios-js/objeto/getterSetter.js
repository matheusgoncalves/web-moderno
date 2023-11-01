const sequencia = {
    _valor: 1, // Convenção, variável pretendida ser acessada apenas internamente
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // 1 2
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor); // 1000 1001
sequencia.valor = 900; // Não vai alterar, pois 900 < 1000
console.log(sequencia.valor, sequencia.valor); // 1002 1003