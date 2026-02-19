console.log("start");
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Something went wrong");
      }
    }, 3000);
  });
}

async function run() {
    try {
        const data = await fetchData();
        console.log('success', data);
    } catch(err) {
        console.log('error caught', err);
    }
}
run();