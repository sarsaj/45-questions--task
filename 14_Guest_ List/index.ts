#!/usr/bin/env node
// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner,
//  who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.

let guest_Name: string[] = ["Sardar Ali", "Wasif", "Safwan"];
guest_Name.forEach((guest_Name) => {
  console.log(`Dear ${guest_Name}, "Would you like to come in dinner Party"?`);
});
