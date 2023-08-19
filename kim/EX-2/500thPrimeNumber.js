//Function to check the number is prime
function isPrime(number) {
    if(number <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

function find500thPrime(term) {
    let count = 0;
    let number = 2
    while (count < term) {
        if (isPrime(number)){
          count++;
        }
        number++;
    }
    return number - 1;
}
console.log(find500thPrime(500));
