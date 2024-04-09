#!/usr/bin/env node
"use strict";
// Question 45: Cars: Create detailed car objects with flexible properties.
function storecarInfo(manufacturer, modelname, ...extraoption) {
    const carInfo = Object.assign({ manufacturer,
        modelname }, Object.assign({}, ...extraoption));
    return carInfo;
}
;
let answer = storecarInfo('Honda', 'Civic', { color: 'black' }, { features: ['navigation', 'power window', 'vxr'] });
console.log(answer);
