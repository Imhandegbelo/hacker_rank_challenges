/*
  TASK

  Given an array of integers, where all elements but one occur twice, find the unique element.

  ***** Example *****
  a = [1,2,3,4,3,2,1]
  The unique element is 4.

  ***** Function Description *****

  lonelyinteger has the following parameter(s):
  - int a[n]: an array of integers
  Returns
  - int: the element that occurs only once

  Input Format
  The first line contains a single integer, n, the number of integers in the array.
  The second line contains space-separated integers that describe the values in n.

  ******* Constraints *******
  - 1 <= n < 100
  - It is guaranteed that is an odd number and that there is one unique element
  - 0 <= a[i] <= 100, where 0 <= i < n

  ***** Sample Input *****
  *1.
  3
  1 1 2
  output = 2

  *2.
  5
  0 0 1 2 1
  output = 2
*/

const getObjectKey = (obj) => {
  // loop through the object as a key-value pair
  for (let [key, value] of Object.entries(obj)) {
    if (value == 1) {
      return key;
    }
  }
};

function argument_list(size, ...args) {
  const count = {};

  if (size != args.length) {
    console.log("Specified array size is not equal to 'actual array'");
    return -1;
  }
  if (size == args.length) {
    for (const el of args) {
      if (count[el]) {
        count[el]++;
      } else {
        count[el] = 1;
      }
    }
    // console.log(count);
  }
  let return_value = getObjectKey(count);
  console.log(return_value);
}

let check = argument_list(12, 1, 7, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7);

// DONE