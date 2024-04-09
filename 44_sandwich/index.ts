#!/usr/bin/env node
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function makesandWich(item:string[]) {

  console.log('\nMaking your sandwich with:');

  item.forEach(element =>console.log("- "+ element));
      
  console.log('\nEnjoy your sandwich!')
  
}

makesandWich(['ham','cheese','lettuce']);

makesandWich(['turkey','becon']);

makesandWich(['peanut butter','jelly']);

