#!/usr/bin/env node
// Question 22: Intentional Error: Try to produce an array index error in one of your programs.
//  Correct the error before finishing.


let guest_List : string []=["sajjad","Nasir","Nafees","sabir"];

console.log(guest_List[4]);//Intentional error: Arrays are zero-indexed, so index 4 is out of bounds.
console.log(guest_List[3]); // Correcting the error by accessing a valid index.
