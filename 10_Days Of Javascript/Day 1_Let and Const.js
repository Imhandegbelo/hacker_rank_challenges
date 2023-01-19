const PI = Math.PI;

const area_Perimeter = (r) => {
  let area = PI * r * r;
  let perimeter = 2 * PI * r;
  console.log(`${area}\n${perimeter}`);
  // console.log(perimeter);
};


//Test
area_Perimeter(2.6);

//DONE