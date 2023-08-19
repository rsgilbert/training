'use strict'
var factorial = 1;
let n = 5;
for (let i = 1; i <= n; i++)
{
    factorial *= i;
}
console.log(`The factorial of ${n} is ${factorial}.`);
