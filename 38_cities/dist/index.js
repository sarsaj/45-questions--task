#!/usr/bin/env node
"use strict";
// Question 38: Cities: Describing cities with a function.
function name_city(city, country = "Pakistan") {
    console.log(`The ${city} city is in ${country} `);
}
name_city("Karachi");
name_city("Islamabad");
name_city("Newyork", "America");
