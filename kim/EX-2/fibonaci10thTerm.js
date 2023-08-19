function fibonacci(number) {
    let fibTerm1 =0, fibTerm2 = 1, nextTerm, i
    if (number === 0){
        return fibTerm1
    }
    for (i = 2; i <= number; i++) {
        nextTerm = fibTerm1 + fibTerm2;
        fibTerm1 = fibTerm2;
        fibTerm2 = nextTerm;
    }
    return fibTerm2
}
console.log(fibonacci(10));