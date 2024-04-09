#!/usr/bin/env node
"use strict";
// // Question 42: Great Magicians: Add "the Great" to magician names.
let magcian = ["victoria", "vijay", "anad"];
function make_Great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magcian[i] = "The great " + magicianArray[i];
    }
}
function show_Magcians(Magicians) {
    Magicians.forEach((element) => {
        console.log(element);
    });
}
make_Great(magcian);
show_Magcians(magcian);
