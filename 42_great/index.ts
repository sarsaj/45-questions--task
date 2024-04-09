#!/usr/bin/env node
// // Question 42: Great Magicians: Add "the Great" to magician names.

let magcian: string[] = ["victoria", "vijay", "anad"];

function make_Great(magicianArray: string[]) {
  for (let i = 0; i < magicianArray.length; i++) {
    magcian[i] = "The great " + magicianArray[i];
  }
}

function show_Magcians(Magicians: string[]) {
  Magicians.forEach((element) => {
    console.log(element);
  });
}

make_Great(magcian);
show_Magcians(magcian);
