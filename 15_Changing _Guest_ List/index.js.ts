#!/usr/bin/env node

// Question 15: Changing Guest List: One of your guests can't make it to the dinner,
//  so you need to send out a new set of invitations with a replacement guest.

// let guest:string[]=["Sardar Ali","Wasif","Safwan"];


let guest:string[]=["Sardar Ali","Wasif","safwan"];

let unableToAttend = "Wasif"
console.log(`${unableToAttend} can't make it to dinner.`)

let new_Guest = "Hazoor Bakhsh";
guest[guest.indexOf(unableToAttend)] = new_Guest

guest.forEach(guest=>{console.log(`${guest}, Would you like to join me in dinner?`);
})


