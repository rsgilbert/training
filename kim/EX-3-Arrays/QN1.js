// You are given an array of integers:
// NUMS = [1, 20, 4, 5, 3, 1, 5, 6, 2]
// Calculate:
// - Mean
// - Mode
// - Average
// - Total

const NUMS = [1, 20, 4, 5, 3, 1, 5, 6, 2];

// Calculate Mean
const initialValue = 0;
// Calculate Total
const calculateTotal = NUMS.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
//Calcute mean
const calculateMean = calculateTotal/ NUMS.length;

//calculate mode
const arrayElementFreq = {};
let maximumFreq = 0;
let mode = [];

NUMS.forEach(element => {
    if (!arrayElementFreq[element]) {
        arrayElementFreq[element] = 1;
    } else {
        arrayElementFreq[element]++;
    }

    if (arrayElementFreq[element] > maximumFreq) {
        maximumFreq = arrayElementFreq[element];
        mode = [element];
    } else if (arrayElementFreq[element] === maximumFreq) {
        mode.push(element);
    };
});

// Calculate Median
const sortedArray = NUMS.slice().sort((firstElement, nextElement) => firstElement - nextElement);
const middleIndex = Math.floor(sortedArray.length / 2);
const median = sortedArray.length % 2 === 0
  ? (sortedArray[middleIndex - 1] + sortedArray[middleIndex]) / 2
  : sortedArray[middleIndex];

// Output the results
console.log("Mean or Average:", calculateMean.toFixed(2));
console.log("Mode:", mode);
console.log("Median:", median);
console.log("Total:", calculateTotal);
