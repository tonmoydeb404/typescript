"use strict";
// ##############
// we can define a variable type before its initalizations and thats called explicit type
// ##############
// string type
let str;
str = "hello";
// str = 400; // error because "str" variable is string type
// number type
let num;
num = 100;
// num = "error"; // error because "num" variable is number type
// array type
let arr;
arr = [];
arr.push(5);
// arr.push("error"); // error because "arr" variable is array of number type
// object type
let obj;
obj = {
    name: "jhon doe",
    age: 19,
    single: false,
};
// obj = []; // error because "obj" variable is object type
// funtion type
let func;
func = (user) => {
    console.log(`hello world ${user}`);
};
func(5);
// function return type
let myFunc = (a, b = 10) => {
    return `hello world from ${a}`;
};
