#!/usr/bin/env node
"use strict";
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places = ["Makkah", "Karbala", "Madina", "Najaf"];
console.log("Orignal order:", places);
console.log("Alphabatic order:", [...places].sort());
console.log("Orignal order:", places);
console.log("reverse alphabatic order:", [...places].sort().reverse());
console.log("Orignal order:", places);
console.log("Reverse alphabatical order:", places);
console.log("Orignal order:", places);
places.sort();
console.log("alphabatic places:", places);
places.reverse();
console.log("orignal places:", places);
