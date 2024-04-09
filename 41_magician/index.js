#!/usr/bin/env node
"use strict";
// Question 41: Magicians: Display magician names from an array.
let magician = ["victoria", "vijay", "anad"];
function show_Magicians(Magicians) {
    Magicians.forEach(element => {
        console.log(element);
    });
}
show_Magicians(magician);
