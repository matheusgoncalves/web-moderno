// Uma factory retorna um novo objeto
module.exports = () => { // Retorna uma função
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}