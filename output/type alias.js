"use strict";
// we can use our type as like we are using the typescript system types
const myUser = {
    name: "jhon doe",
    age: 50,
};
// even we can use those in everywhere
const printUser = (user) => {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
};
