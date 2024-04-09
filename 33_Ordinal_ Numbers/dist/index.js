#!/usr/bin/env node
"use strict";
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
let ordinal_Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinal_Number.forEach(ordinal_Number => {
    let suffix = "th";
    if (ordinal_Number === 1) {
        suffix = "st";
    }
    else if (ordinal_Number === 2) {
        suffix = "nd";
    }
    else if (ordinal_Number === 3) {
        suffix = "rd";
    }
    console.log(`${ordinal_Number}${suffix}`);
});
