function maiorOuIgual(primeiro, segundo) {
    if (primeiro >= segundo) {
        return true;
    } else {
        return false;
    }
}

console.log(maiorOuIgual(0, 0)); // true
console.log(maiorOuIgual(0, "0")); // false
console.log(maiorOuIgual(1, 5)); // false