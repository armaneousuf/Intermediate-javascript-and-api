// Create a loginUser(username, password) function that returns a Promise — resolves with "Welcome!" if credentials are "admin" / "1234", rejects with "Invalid credentials" otherwise. Call it with try/catch

function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                resolve("Welcome")
            } else {
                reject("Invalid credentials")
            }
        }, 1000);
    });
};

async function handleLogin(username, password) {
    try {
        const result = await loginUser(username, password)
        console.log(result);
    } catch (err) {
        console.error(err)
    }
}

handleLogin("admin", "1234");
handleLogin("Sudo", "1234");