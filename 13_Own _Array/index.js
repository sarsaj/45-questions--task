#!/usr/bin/env node
"use strict";
// Question 13: Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples.
//  Use your list to print a series of statements about these items,
//  such as “I would like to own a Honda motorcycle.”
let transportation = ["car", "bus", "cycle"];
for (let name of transportation) {
    console.log(`\t\n “I would like to own a ${name}.”`);
}
