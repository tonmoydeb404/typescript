# Typescript

typescript is a superset of javascript. this is a documentation where i am including all the stuff that i am learing in typescript. to get started with typescript, make sure that node js is installed in your machine. then type bellow code to install typescript globally in your machine.

```shell
npm install -g typescript
```

## Making a Typescript Project

to make a typescript project we need to initiate the typescript in our project directory. to do that open your project directory in CLI and and use the bellow command.

```shell
tsc --init
```

this will generate a typescript config file. as your requirements you can make changes in the config file.

## Typescript Types

typescript is specificly type concerned. whenever we are defining a variable with a value, typescript automaticly set the value type as the variable type.

```typescript
let userName = "tonmoydeb404";
// we declared "userName" variable with a String type value so typescript set the "userName" variable as a String type.

userName = 56;
// this will return a error because the "userName" variable is String type
```

see more code examples in [type.ts](./src/type.ts) file.

## Explicit Type

if we want to define the variable type without declaring the variable value then we can use the explicit type concept.

```typescript
let str: string;
// we defined the variable type is string

str = "hello";
// str = 400; // error because "str" variable is string type
```

see more code examples in [explicit type.ts](./src/explicit%20type.ts) file.

## Dynamic Type

when our data type is not specified we can use "any" keyword to set any type of data in our variable

```typescript
let x: any;
// we can store any type of value in this variable

let y: any[] = [];
// we can store any type of value in this array variable. but we can't reassign it with any other data type
```
