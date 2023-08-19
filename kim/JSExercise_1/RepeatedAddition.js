function multiplyByaddition(number, times) {
    let product = 0;

    for(let i=0; i < times; i++){
        product += number;
    }

    return product
}

const number = 1500;
const times = 300;
const result = multiplyByaddition(number, times);
console.log("The product of 1500 and 300 by continuous addition is: " + result);