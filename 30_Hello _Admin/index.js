#!/usr/bin/env node
"use strict";
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
let person = ["Admin", "Wafa", "Gulzar"];
person.forEach((person) => {
    if (person === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${person}, thank you for logging in again`);
    }
});
