/*
    Given an array of integers, calculate the ratios of its elements that 
	are positive, negative, and zero. Print the decimal value of each fraction 
	on a new line with 6 places after the decimal.

    Note: This challenge introduces precision problems. The test cases are 
	scaled to six decimal places, though answers with absolute error of up 
	to 10^-4 are acceptable.

    *** Input Format
        - First line contains an integer n, the size of the array
        - n space-separated integers that describes arr[n]
    *** Constraints ****
        0 < n <= 100
        -100 <= arr[i] <= 100
    *** Output Format
        Print the following 3 lines, each to 6 decimal places
        1. proportion of positive values
        2. proportion of negative values
        3. proportion of zeros
*/

function getValues(args) {
  let pos = 0;
  let neg = 0;
  let zero = 0;

  // iterate through the array and classify the elements accordingly
  args.forEach((element) => {
    if (element > 0) {
      pos++;
    } else if (element < 0) {
      neg++;
    } else {
      zero++;
    }
  });
  let pos_ratio = pos / args.length;
  let neg_ratio = neg / args.length;
  let zero_ratio = zero / args.length;

  console.log(
    `${pos_ratio.toFixed(6)}\n${neg_ratio.toFixed(6)}\n${zero_ratio.toFixed(6)}`
  );
}

let test_array = [-1, 25, 6, 3, 0, 0, -4, -8, -44];

getValues(test_array); //	3, 4 and 2

// DONE
