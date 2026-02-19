// Write an async function called getUserData(id) that:

// Returns a Promise that resolves with { id, name: "John" } after a 1 second delay — if id is a positive number
// Rejects with an error "Invalid ID" if id is 0 or negative

// Then call getUserData using async/await inside a try/catch block and handle both the success and error cases.

async function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id >= 1) {
        resolve({ id, name: "John" });
      } else {
        reject(new Error("Invalid ID"));
      }
    }, 1000);
  });
}

async function main() {
  try {
    const result = await getUserData(5);
    console.log(result);

    const result2 = await getUserData(-10);
    console.log(result2);
  } catch (err) {
    console.log("Error", err.message);
  }
}

main();
