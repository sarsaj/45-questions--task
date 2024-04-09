#!/usr/bin/env node
"use strict";
// Question 19: Dinner Guests: Use one of your programs from Exercises 14
//  through 18 to print a message indicating the number of people you are inviting to dinner.
let guest = ["Sardar Ali", "Wasif", "Safwan"];
console.log("Great news! I found a bigger dinner table!");
guest.unshift("Hazoor Bakhsh");
guest.splice(guest.length / 2, 0, "Faiza");
guest.push("Sajjad Hussain");
guest.forEach((guest) => {
    console.log(`Dear ${guest}"Would you like to join me for dinner?`);
});
console.log(`i am inviting ${guest.length} People to the party.`);
