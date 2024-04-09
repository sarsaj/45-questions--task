#!/usr/bin/env node 
// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// Tests for equality and inequality with strings
console.log("test for equality with string:","Apple" ==="Apple");
// Test for inequality with strings
console.log("test for inequality with string:",("Apple" as string) !="orange");

// • Tests using the lower case function
console.log("the lowercase function:", "HELLO".toLowerCase()==="hello");
// • Numerical tests involving equality 
console.log("test for equality with number:",26===26);
// inequality test
console.log("test for inequality with number:",(26 as number)!=85);
// greater than
console.log("greater than test:", 10>5);
// and less than,
console.log("less than test",4<6);

// greater than or equal to, 
console.log("greater than or equal test:", 10>=10);
// and less than or equal to
console.log("less than or equal test:", 9<=10);

// • Tests using "and" and "or" operators
console.log("test using and:", 5 ===5 && 10>5);
console.log("test using or:", 5 ===5 || 10>11);

// • Test whether an item is in a array

const vegetables:string[]=['tamator','piyaz','matar'];
console.log('test"tamator" in the array:', vegetables.includes("tamator"));

// • Test whether an item is not in a array 
console.log('test "apple" is not include in array:', !vegetables.includes("apple"));

