"use strict";
let userName = "tonmoydeb404";
// userName = 56;
// this will return a error because at the declaration stage we assigned a STRING type value. if we want to reassign the variable with another type of value it will return a error.
let password;
password = "hello world";
password = 12345678;
// there is no error because at the declaration stage the password variable is undefined. so we can any type of value in this variable
let message = (person) => console.log(`Hey ${person}, wellcome to this world`);
// whenever we're using a parameter in function we need to define the parameter data type othewise there will be an error.
// message(404)
// if we try to call the function with different type of parameter value there will be an error.
message("tonmoydeb404"); // here is no error :)
let userInterest = ["business", "technology", "gaming"];
// as like as variable type TYPESCRIPT also control the array elements data type. if you're using any value in array declaration then typescript use the data type as a default data type of array elements. you can not add any other type of value
// userInterest.push(50);
// this will return a error because our userInterest variable is a array of STRING.
userInterest.push("programming"); // there is no error :)
let user = {
    id: "#1",
    name: "Tonmoy Deb",
    age: 18,
};
// as always typescript also control the Objects. like variable you can not use different data type in Object property. also you cannot assign any new property to the Object.
// user.id = 5 // here is an error because of using different data type
// user.relationship = "single" // here is an error because of creating a new object property
user.age = 19; // here is no error :)
