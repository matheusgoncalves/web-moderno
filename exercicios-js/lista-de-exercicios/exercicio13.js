filtrarNumeros = array => {
    return array.filter(elemento => typeof elemento === "number");
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])); // [1, 20]
console.log(filtrarNumeros(["a", "c"])); // []