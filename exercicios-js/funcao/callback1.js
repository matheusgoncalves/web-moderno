const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`); 
}

fabricantes.forEach(imprimir); // forEach percorre o array e chama a callback para cada elemento do array
fabricantes.forEach(fabricante => console.log(fabricante));