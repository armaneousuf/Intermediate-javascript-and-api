let username = null;
// Set a default value of "Guest" if username is falsy

// Assign a default value so that if `username` is null, undefined, or any falsy value, it becomes "Guest" instead.

username = username ?? "Guest";
console.log(username);