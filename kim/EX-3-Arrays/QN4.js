//Write a program that doubles the value of every element in array C = [10, 5, 5, 3, 15]. 
//Print the updated array C.


// const C = [10, 5, 5, 3, 15];
// const multipliedC = C.map(Element => Element*2);
// console.log(multipliedC);
// console.log(C);

const C = [10, 5, 5, 3, 15];

function doubledArrayElements(C) {
    for (let i = 0; i < C.length; i++) {
        C[i] *= 2;
    }
};
doubledArrayElements(C);

console.log('The updated array C after doubling its elements is: ', C);

