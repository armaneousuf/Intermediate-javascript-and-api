// Wrap a setTimeout in a Promise that resolves with "Done!" after 3 seconds, then log the result using .then()

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve("Done!");
    } else {
      reject("Rejected");
    }
  }, 3000);
});

myPromise.then((value) => { console.log(value) })
    .catch((error) => { console.log(error) })
    .finally(() => console.log("Finished"));
