#!/usr/bin/env node
"use strict";
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size = "large", message = " I Love Typescript") {
    console.log(`Making a shirt ${size} size , with a message ${message} print on it`);
}
make_shirt("large");
make_shirt("medieum");
make_shirt("small", "MAMA BABY");
