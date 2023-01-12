function getGrade(scores) {
  if (scores > 25) {
    return "A";
  } else if (scores > 20) {
    return "B";
  } else if (scores > 15) {
    return "C";
  } else if (scores > 10) {
    return "D";
  } else if (scores > 5) {
    return "E";
  } else {
    return "F";
  }
}

//Test
console.log(getGrade(15))

//DONE