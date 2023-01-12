/* 
  TASK
  Given an integer numb, perform the following conditional actions:
 - If numb is odd, print "Weird"
 - If numb is even and in the inclusive range of 2 to 5, print "Not Weird"
 - If numb is even and in the inclusive range of 6 to 20, print "Weird"
 - If numb is even and greater than 20, print "Not Weird"
*/

function isWeird(numb) {
  // if numb is even, isEven = true; false otherwise
  let isEven = numb % 2 == 0 ? true : false;
  // console.log(numb);
  // console.log(isEven);

  if (isEven) {
    if (numb >= 2 && numb <= 5) {
      console.log("Not Weird");
    } else if (numb >= 6 && numb <= 20) {
      console.log("Weird");
    } else {
      console.log("Not Weird");
    }
  } else {
    console.log("Weird");
  }
}

//test with random numbers every time the function is called
isWeird(Math.ceil(Math.random() * 100));

//DONE