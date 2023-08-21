
/**
 * Implement a program that returns true if a given array has a duplicate value.
 * @param {string[]} arr 
 * @returns {boolean} true if array has a duplicate, false otherwise
 */
function hasDuplicate(arr) 
{
    const uniqueValues = new Set();
    for (const element of arr) 
    {
        if (uniqueValues.has(element)) 
        {
            return true;
        } else 
        {
            uniqueValues.add(element);
        }
    }
    return false;
}

let a = hasDuplicate(['kim', 'john', 'sarah', 'mark', 'peter', 'peter']) // true 
let b = hasDuplicate(['moses', 'simon', 'rodrick', 'messi']) // false
let c = hasDuplicate([]) // false
let d = hasDuplicate(['trump']) // false 
let f = hasDuplicate(['robert', 'angella', 'angella', 'angella', 'robert']) // true

console.log(a, b, c, d, f);