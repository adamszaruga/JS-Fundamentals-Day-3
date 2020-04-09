/*******************
EX 1: Math
********************/

function minimum(numbers) {
    // Assuming that the parameter "numbers" holds an array of numbers,
    // make this function return the smallest number
    // Don't assume that the numbers are in order!
}

function average(numbers) {
    // Assuming that the parameter "numbers" holds an array of numbers,
    // make this function return the average of all the numbers
}

function median(numbers) {
    // Assuming that the parameter "numbers" holds an array of numbers,
    // make this function return the median of all the numbers.
    // The median is the number that's in the middle of the array
}

const numbers = [-8,-8,-8,-8,-6,-5,-5,-5,-4,-3,-3,-2,-1,-1,-1,0,0,0,1,1,1,1,2,2,3,4,6,6,7,7,8,9,10,10,12,12,12,12,12,12,13,14,15,16,16,17,17,19,20,21]

console.log('The average is: ' + average(numbers));
console.log('The minimum number is: ' + minimum(numbers));
console.log('The middle number is: ' + median(numbers));