const compareTriplets = (arr1, arr2) => {
  if (arr1.length === arr2.length) {    //test if arrays have same length
    let alice = 0,
      Bob = 0;
      
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        alice++;
      } else if (arr1[i] < arr2[i]) {
        Bob++;
      }
    }
    console.log(`${alice} ${Bob}`);
  }
};

compareTriplets([17, 28, 30], [99, 16, 8]);

// DONE