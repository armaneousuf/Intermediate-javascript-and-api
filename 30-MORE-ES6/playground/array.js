const numbers = [5, 10, 15, 25, 30];

for (let count = 0; count <= 100; count++) {
  const index = count % numbers.length;
  console.log(`${count + 0} position is:`, numbers[index]);
}
