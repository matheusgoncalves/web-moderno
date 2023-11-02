const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Massa quebrou o carro! (remove o último elemento do array)
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona um elemento no final do array
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona um elemento no início do array
console.log(pilotos);

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); // Adiciona Bottas e Massa na posição 2
console.log(pilotos);

// Remover
pilotos.splice(3, 1); // Massa quebrou :( (Remove o elemento da posição 3)
console.log(pilotos);

// Slice retorna um novo array

const algunsPilotos1 = pilotos.slice(2); // Retorna um novo array a partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Retorna um novo array a partir do índice 1 até o índice 4 (sem incluí-lo)
console.log(algunsPilotos2);