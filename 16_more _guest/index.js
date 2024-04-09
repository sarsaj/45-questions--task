#!/usr/bin/env node
"use strict";
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guest = ["Sardar Ali", "Wasif", "Safwan"];
console.log("Great news! I found a bigger dinner table!");
guest.unshift("Hazoor Bakhsh");
guest.splice(guest.length / 2, 0, "Faiza");
guest.push("Sajjad Hussain");
guest.forEach((guest) => {
    console.log(`Dear ${guest}"Would you like to join me for dinner?`);
});
