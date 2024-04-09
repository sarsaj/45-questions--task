#!/usr/bin/env node
"use strict";
// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
let age = 35;
if (age < 2) {
    console.log("The person is baby.");
}
else if (age < 4) {
    console.log("The Person is toddler.");
}
else if (age < 13) {
    console.log("The person is kid.");
}
else if (age < 20) {
    console.log("The person is teenage. ");
}
else if (age < 45) {
    console.log("The person is Adult.");
}
else {
    console.log("The person is Elder.");
}
