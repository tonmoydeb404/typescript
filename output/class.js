"use strict";
class Student {
    constructor(
    // if we are using the access modifiers then this is a shortcut to make properties in class
    name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}
const sajid = new Student("Sajid", 18, 189240);
// sajid.name = "majid"; // error: name property is read only
// console.log(sajid.roll) // error: roll property is private
// we can create array of Student class
let studentArr = [];
studentArr.push(sajid);
// studentArr.push("error") // error: studentArr is array of Student class
