function getSecondLargest(nums) {
  let num_array = nums.split(" ").sort((a, b) => a - b);

  // the max is the element at the last index after sorting
  let max = num_array.slice(-1).toString();

  // make sure there are no duplicate max values
  let array_length = num_array.length;

  while (num_array[array_length - 1] == max) {
    num_array.pop();
    array_length--;
  }

  // return the last element as it is now the largest
  return num_array.slice(-1).toString();
}

console.log(getSecondLargest("2 3 5 6 6"));
console.log(getSecondLargest("-2 -3 -6 -7 -5"));

//DONE
