/*
*TASK*
Given an array of integers, find the sum of its elements.

*CONSTRAINTS*
0 < n, ar[i] <= 1000

*INSTRUCTION*
simpleArraySum has the following parameter(s)
- ar: an array of integers

*SAMPLE INPUT*
ar: [1,2,3]
-expected output: 6
*/

let test1 = [1,2,3]
let test2= [1,2,3,4,10,11]

const simpleArraySum = (arr) =>{
    let sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(simpleArraySum(test2))