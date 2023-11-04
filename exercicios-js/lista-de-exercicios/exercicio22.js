funcaoDaSorte = numero => {
    const min = 1;
    const max = 10;
    const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numero === aleatorio ? `Parabéns! O número sorteado foi o ${aleatorio}` : `Que pena! O número sorteado foi o ${aleatorio}`
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));