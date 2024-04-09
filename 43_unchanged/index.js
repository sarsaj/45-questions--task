#!/usr/bin/env node
"use strict";
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
let magician = ["victoria", "vijay", "anad"];
function copyArray(arr) {
    return [...arr];
}
function make_Great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "The great " + magicianArray[i];
    }
}
function show_Magicians(Magicians) {
    Magicians.forEach((element) => {
        console.log(element);
    });
}
const copymagicianArray = copyArray(magician);
make_Great(copymagicianArray);
console.log("\n\nThis is my orignal array");
show_Magicians(magician);
console.log("\n\nThis is my  modified  array");
show_Magicians(copymagicianArray);
