const user1 = { name: "Alice", email: "alice@example.com" };
const user2 = { name: "Bob", email: "" };
const user3 = { name: "Charlie", email: null };
const users = [user1, user2, user3];
// Check if each user object has a valid (truthy) email. You can log whether each user has a valid email or not.

users.forEach(user => {
    if (user.email) {
        console.log(`${user.name}'s email is valid`);
    } else {
        console.log(`${user.name}'s email is invalid`);
    }
});