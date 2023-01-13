function getSecondLargest(input) {
    let input_array = input.split("")

  // find the max and set it to 0
  let max = Math.max(...input_array);

  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] == max) {
      input_array[i] = 0;
    }
  }

  // since the max element has been set to 0, new max is the second max
  let second_max = Math.max(...input_array);
  return second_max;
}

console.log(getSecondLargest("2 3 6 7 5"));

//DONE
