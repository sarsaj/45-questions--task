#!/usr/bin/env node
// Question 11: Names: Store the names of a few of your friends in an array called names.
//  Print each person’s name by accessing each element in the list, one at a time.

let friends_name: string[] = ["Sardar Ali", "Sajjad", "Nasir"];
for (let i = 0; i < friends_name.length; i++) {
  console.log(friends_name[i]);
}
