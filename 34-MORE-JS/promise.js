console.log("start");
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Data fetched successfully")
            } else {
                reject("Something went wrong")
            }
        }, 3000);
    });
}
fetchData().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});