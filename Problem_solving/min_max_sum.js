function miniMaxSum(arr) {
  // Write your code here
  let new_arr = arr.sort();
  let min_sum = 0;
  let max_sum = 0;
  for (var i = 0; i < new_arr.length - 1; i++) {
    min_sum += new_arr[i];
  }
  for (var j = 1; j < new_arr.length; j++) {
    max_sum += new_arr[j];
  }

  console.log(`${min_sum} ${max_sum}`);
}

let test_array = [7, 69, 2, 221, 8974];
miniMaxSum(test_array);

//DONE
