//You are given two arrays A and B, write a program that creates a new array C where each element
//of the array C is the sum of the corresponding element in array A and the corresponding element
//in array B at the same index in array C.
//A = [10, 20, 15, 24]  B = [5, -10, 55, 10]

const A = [10, 20, 15, 24]
const B = [5, -10, 55, 10]

function sumOfArrays(A, B) 
{
  let C = [];
  let control = 0;
  let i = 0;

  if (A.length === 0){
    return "array A is empty";
  } 
  if (B.length === 0){
    return "Array B is empty"; 
  } 

 while (control < A.length && control < B.length) {
    C.push(A[control] + B[control]);
    control++;
  }

 if (control === A.length) {
    for (i = control; i < B.length; i++) {
      C.push(B[x]);
    }
  } else {
    for (i = control; i < A.length; i++) 
    {
      C.push(A[i]);
    }
  }
  return C;
}
console.log('The sum of two arrays is: ', sumOfArrays(A, B));



