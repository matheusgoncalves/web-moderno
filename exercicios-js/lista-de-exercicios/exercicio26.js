removerVogais = string => {
    return string.replace(/[aeiou]/ig, '');
}

console.log(removerVogais("Cod3r")); // "Cd3r"
console.log(removerVogais("Fundamentos")); // "Fndmnts"