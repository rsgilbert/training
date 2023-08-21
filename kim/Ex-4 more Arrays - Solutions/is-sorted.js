
/**
 * Implement a program that returns true if a given array is sorted.
 * @param {number[]} arr 
 * @returns {boolean} true if sorted, false otherwise
 */
function isSorted(arr) 
{
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] < arr[i-1]) {
            return false
        } 
    }
    return true
}

let A1 = isSorted([10, 20, 30, 40, 50, 50]) // true 
let A2 = isSorted([5, 6, 7, 1]) // false
let A3 = isSorted([]) // true
let A4 = isSorted([1]) // true 
let A5 = isSorted([-1, 0, 0, 0, -1]) // false
let A6 = isSorted([7,5,3,2]) 

console.log(A5);