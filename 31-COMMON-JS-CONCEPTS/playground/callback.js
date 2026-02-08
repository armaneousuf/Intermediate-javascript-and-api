function greet(name) {
    console.log('Hello ' + name);
}

function processUser(callback) {
    const username = 'John Doe';
    callback(username);
}

processUser(greet); // `greet` used as an argument.