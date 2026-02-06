const celsiusTemps = [0, 10, 20, 25, 30, 37, 100];

const convert = celsiusTemps.map((celsius) => (celsius * 9 / 5) + 32);
console.log(convert);