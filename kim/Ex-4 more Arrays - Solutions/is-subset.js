
/**
 * Implement a program that returns true if a given array arr1 is a subset of another array arr2.
 * An array arr1 is a subset of array arr2 if all elements in arr1 appear in arr2 in the same order as they appear in arr1.
 * In otherwords, you can get arr1 by removing off zero or more elements from arr2 from the start and end of arr2.
 * @param {number[]} arr1
 * @param {number[]} arr2 
 * @returns {boolean} true if arr1 is a subset of arr2, false otherwise
 */
function isSubset(arr1, arr2) {
    //using a two pointer technique
    let index1 = 0;
    let index2 = 0;

    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] === arr2[index2]) {
            index1++;
        }
        index2++;
    }
    return index1 === arr1.length;
};


let B1 = isSubset([1, 2, 3], [5, 2, 3, 1]) // false 
let B2 = isSubset([5,1], [5, 1]) // true
let B3 = isSubset([], [])// true
let B4 = isSubset([1, 1, 2], [2]) // false 
let B5 = isSubset([0, 0], [-11, 0, 0, 0, -1]) // true 
let B6 = isSubset([5,5], [5, 1]) //false

console.log(B1,B2,B3,B4,B5,B6);