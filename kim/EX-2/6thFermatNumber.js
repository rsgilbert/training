//on the first fermat term, number is set to zero

function fermat6thNumber(number) {
    return Math.pow(2, Math.pow(2, number)) + 1;
  }
  let number = 6;
console.log(fermat6thNumber(number -1));
  