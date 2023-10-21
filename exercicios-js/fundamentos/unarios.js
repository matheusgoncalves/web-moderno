let num1 = 1;
let num2 = 2;

num1++; // pós fixada (maior precedência)
console.log(num1);
--num1; // pré fixada (menor precedência)
console.log(num1);

console.log(++num1 === num2--); // true
console.log(num1 === num2); // false