    const user = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA",
        zipCode: 10001,
    },
    hobbies: ["reading", "gaming", "cooking"],
    contact: {
        email: "john@example.com",
    },
    };

    // 1. Access name using DOT notation
    const userName = user.name // your code
    console.log(userName);
    // 2. Access city using DOT notation (nested)
    const userCity = user.address.city // your code
    console.log(userCity);
    // 3. Access age using BRACKET notation
    const userAge = user['age']; // your code
    console.log(userAge);
    // 4. Access country using BRACKET notation (nested)
    const userCountry = user['address']['country'] // your code
    console.log(userCountry);
    // 5. Access first hobby using both methods
    // const firstHobby = user.hobbies[0] // your code
    // console.log(firstHobby);
    const firstHobby = user['hobbies'][0];
    console.log(firstHobby);