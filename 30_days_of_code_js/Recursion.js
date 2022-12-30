const factorial = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

let checker = factorial(6)
console.log(checker)

// DONE