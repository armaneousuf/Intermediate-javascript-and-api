// Simulate fetching 3 users at the same time using Promise.all — each fetch takes a different amount of time (use setTimeout inside Promises). Log all results once all three are done.

const getUserData = (value, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value)
        }, delay);
    });
};

Promise.all([
    getUserData("Data 1", 1000),
    getUserData("Data 2", 2000),
    getUserData("Data 3", 3000)
]).then(([res1, res2, res3]) => {
    console.log(res1, res2, res3);
});