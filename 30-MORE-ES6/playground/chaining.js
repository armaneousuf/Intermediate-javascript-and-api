const person1 = {
  name: "Alice",
  address: {
    city: "Boston",
  },
};

const person2 = {
  name: "Bob",
  // No address property!
};

// 8. Access city safely from person1
const city1 = person1?.address?.city // your code using ?. // Should be: Boston
console.log(city1);
// 9. Access city safely from person2 (has no address)
const city2 = person2?.address?.city;  // your code using ?. on person2 // Should be: undefined (NOT an error!)
console.log(city2);
// 10. WITHOUT optional chaining (this would crash):
// const city3 = person2.address.city; // TypeError: Cannot read property 'city' of undefined
// console.log(city3);