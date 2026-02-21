// Create a loginUser(username, password) function that returns a Promise — resolves with "Welcome!" if credentials are "admin" / "1234", rejects with "Invalid credentials" otherwise. Call it with .then() and .catch()

function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Welcome");
      } else {
        reject("Invalid credentials");
      }
    }, 1000);
  });
}

loginUser("admin", "1234")
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

loginUser("admi", "1234")
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
