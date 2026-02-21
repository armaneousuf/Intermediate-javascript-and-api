const getUserData = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

Promise.allSettled([
  getUserData("Data 1", 1000),
  Promise.reject("Something went wrong!"), // ← add this
  getUserData("Data 3", 3000),
])
  .then(([res1, res2, res3]) => {
    console.log(res1, res2, res3);
  })
  .catch((err) => console.error(err));