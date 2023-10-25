// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})(); // Muito utilizado para fugir do escopo global, para não ter conflitos com outras bibliotecas.