function timeConversion(s) {
  let new_s = s.toString().split("");
  let isBeforeNoon = false;

  // Check if the time contains AM or PM
  if (new_s.splice(-2).includes("A")) isBeforeNoon = true;

  // convert first two elements to numbers
  let hour = Number(new_s.splice(0, 2).join(""));

  // If it is the twelfth hour and before noon, it is midnight restart timer
  hour == 12 ? (hour = 0) : hour;

  if (isBeforeNoon) {

    new_s.unshift(hour.toString());

    // if hour is less than 10 add an extra 0 to make it two digits
    if (hour < 10) new_s.unshift("0");
    return new_s.join("");
    // } else if(){
  } else {
    // convert hour to 24 hours time and then to string

    new_s.unshift((hour + 12).toString());
    return new_s.join("");
  }
}

console.log(timeConversion("01:05:45PM"));

// DONE
