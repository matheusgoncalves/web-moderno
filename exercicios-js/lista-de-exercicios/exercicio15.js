receberSomenteOsParesDeIndicesPares = array => {
    return array.filter(elemento => (elemento % 2 == 0) && (array.indexOf(elemento) % 2 == 0));
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])); // []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])); // [10, 22]