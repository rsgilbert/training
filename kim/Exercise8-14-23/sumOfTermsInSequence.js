
const numberOfTerms = 10; 
let term = 5;
const commonMultiplier = 10;
let sum = 0;

for (let i = 1; i <= numberOfTerms; i++) {
    sum += term;
    term = term * commonMultiplier + 5;
}
console.log("The sum of the sequence is:", sum);
