// ##############
// we can define a variable type before its initalizations and thats called explicit type
// ##############

// string type
let str: string;

str = "hello";
// str = 400; // error because "str" variable is string type

// number type
let num: number;

num = 100;
// num = "error"; // error because "num" variable is number type

// array type
let arr: number[];

arr = [];

arr.push(5);
// arr.push("error"); // error because "arr" variable is array of number type

// object type
let obj: {
  name: string;
  age: number;
  single: boolean;
};

obj = {
  name: "jhon doe",
  age: 19,
  single: false,
};
// obj = []; // error because "obj" variable is object type

// funtion type
let func: Function;
func = (user: string) => {
  console.log(`hello world ${user}`);
};

func(5);

// function return type
let myFunc = (a: string, b: number = 10): string => {
  return `hello world from ${a}`;
};
