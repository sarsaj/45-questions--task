#!/usr/bin/env node

// Question 21: Think of something you could store in a TypeScript Object.
//  Write a program that creates Objects containing these items.

interface car {
  maker: string;
  model: number;
  color: string;
  autometic: boolean;
}

let car: car = {
  maker: "Honda",
  model: 2024,
  color: "White",
  autometic: true,
};

console.log(car);

interface person {
  name: string;
  age: number;
  country: string;
  student: boolean;
}

let person: person = {
  name: "Sardar Ali",
  age: 37,
  country: "Pakistan",
  student: true,
};
console.log(person);
