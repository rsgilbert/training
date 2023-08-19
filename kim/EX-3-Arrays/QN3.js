//Write a program that removes/deletes all even integers from the array M = [10, 20, 30, 5, 6, 1]. 
//Print the updated array M.

function deleteEvenNumsArray() {

    let M = [10, 20, 30, 5, 6, 1];
    let newArray = [];

    for (let i = 0; i < M.length; i++) {
        if (M[i] % 2 !== 0) {
            newArray.push(M[i]);
        }
    }
    console.log('The filtered array with no even numbers: ', newArray);
};
deleteEvenNumsArray();