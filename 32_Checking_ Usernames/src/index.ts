#!/usr/bin/env node
// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let current_users: string[] = [
  "noman",
  "junaid",
  "Fahad",
  "dilbar",
  "samandar",
];

let new_users: string[] = ["wafa", "salman", "junaid", "samandar"];

new_users.forEach((new_users) => {
  if (
    current_users.some(
      (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
    )
  ) {
    console.log(`${new_users} Will need to enter a new username.`);
  } else {
    console.log(`${new_users} is available.`);
  }
});
