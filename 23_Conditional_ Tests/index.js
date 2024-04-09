#!/usr/bin/env node
"use strict";
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
let car = "subaru";
// test 1
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");
// test 2
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
// test 3
console.log("Is car != 'Honda'? I predict True.");
console.log(car == "subaru");
// test 4
console.log("Is car != 'ford'? I predict True.");
console.log(car != "ford");
// test 5
console.log("Is car.uppercase == 'SUBARU'? I predict True. ");
console.log(car.toUpperCase() == "SUBARU");
// test 6
console.log("Is car== 'SUBARU'? I predict false.");
console.log(car == "SUBARU");
//  test 7
console.log("Is car=== 'SUBARU'? I predict false.");
console.log(car === "SUBARU");
//  test 8
console.log("Is car=== 'train'? I predict false.");
console.log(car === "train");
//  test 9
console.log("Is car=== 'bus'? I predict false.");
console.log(car === "bus");
//  test 10
console.log("Is car=== 'cycle'? I predict false.");
console.log(car === "cycle");
