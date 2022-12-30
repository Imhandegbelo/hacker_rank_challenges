/*
  TASK
  Given a string S, of length N that is indexed from 0 to N-1,
  print its even-indexed and odd-indexed characters as 2 space-separated
  strings on a single line (see the Sample below for more detail).

  Note: 0 is considered to be an even index.

  ***** Sample Input
  2
  Hacker
  Rank

  ***** Sample output
  Hce akr
  Rn ak
*/

function splitter(str) {
  let funny_string = str.split("");
  let even_characters = [];
  let odd_characters = [];

  // loops through the array and separates the odd chars from the even
  for (let index = 0; index < funny_string.length; index++) {
    if (index == 0 || index % 2 == 0) {
      even_characters.push(funny_string[index]);
    } else {
      odd_characters.push(funny_string[index]);
    }
  }

  let even_string = even_characters.join("");
  let odd_string = odd_characters.join("");

  console.log(`${even_string} ${odd_string}`);
}

function evenOddString(size, args) {
  let arg_array = args.split(" ");
  // checks if the number test cases provided is equal to size
  if (size == arg_array.length) {
    // calls the splitter function on each provided argument
    arg_array.forEach((el) => {
      splitter(el);
    });
  } else {
    console.log("Number of test cases not equal to provided tests");
  }
}

evenOddString(2, "Hacker Rank");

// DONE
