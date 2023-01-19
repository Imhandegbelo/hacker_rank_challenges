function getLetter(s) {
  let letter;
  // Write your code here
  let first_letter = s[0];

switch (first_letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    letter = "A";
    break;
  case "b":
  case "c":
  case "d":
  case "f":
  case "g":
    letter = "B";
    break;
  case "h":
  case "j":
  case "k":
  case "l":
  case "m":
    letter = "C";
    break;
  default:
    letter = "D";
    break;
}
  return letter;
}

//Test
console.log(getLetter("jogn"));

//DONE