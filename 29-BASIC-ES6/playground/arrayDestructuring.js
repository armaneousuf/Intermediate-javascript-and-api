const colors = ["red", "green", "blue", "yellow"];

// 1. Get first and second color
const [color1, color2] = colors;
  console.log(color1, color2); // Should be: red green

// 2. Skip first color, get second and third
const [, secondColor, thirdColor] = colors;
  console.log(secondColor, thirdColor); // Should be: green blue

// 3. Get first color and put the rest in an array
const [firstColor, ...restColors] = colors; // your code // red
console.log(restColors); 

