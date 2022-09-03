# Typescript

typescript is a superset of javascript. this is a documentation where i am including all the stuff that i am learning in typescript. to get started with typescript, make sure that node js is installed in your machine. then type bellow code to install typescript globally in your machine.

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

when our data type is not specified we can use `any` keyword to set any type of data in our variable

```typescript
let x: any;
// we can store any type of value in this variable

let y: any[] = [];
// we can store any type of value in this array variable. but we can't reassign it with any other data type
```

## Type Union

when we need to store multiple type of value in a variable, we can use type union using `|` symbol.

```typescript
let union: string | number;
// now we can store string or number value

union = "hello world";
union = 100;

// union = []; // error because "union" variable accept only string or number type
```

## Type Alias

defining data type all the time is not good for code because in larger application there are tons of type checking codes. so its hard to maintain. to fix this we can use type alias.

```typescript
// our own type
type userType = {
  name: string;
  age: number;
};

// we can use our type as like we are using the typescript system types
const myUser: userType = {
  name: "jhon doe",
  age: 50,
};

// even we can use those in everywhere
const printUser = (user: userType) => {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
};
```

using type alias we can create our own type. we can store the common type checkings in our own type. by using that we can prevent the code repetations and maintain the code. to create our own type we need to use the `type` keyword.

## Function Signatures

function signature is like a function blueprint. we can control the function parameters and function return also.

```typescript
let funcSignature: (user: string, age: number) => string;
```

as we can see we are defining the function parameters, types and the function return type. we can use this signature to create our actual function.

```typescript
funcSignature = (user: string, age: number) => {
  return `${user} is ${age} years old`;
};
```

## Class In TypeScript

as like as variable we can define the class property type.

```typescript
class Student {
  name: string;
  age: number;
  roll: number;
}
```

also we can control the property access with access modifiers.

```typescript
class Student {
  readonly name: string; // you can't overwrite this property outside of class

  private age: number; // you can't read or write this property outside of class

  public roll: number; // public is default modifier. you can do whatever you want
}
```

the great news is you can use your Class as a array children type. just like this...

```typescript
let studentArr: Student[] = [];
```

see the actual code example from [class.ts](./src/class.ts) file.

## Module System

to make our code easier to maintain we need to use modular code system. to do this we need to configure the `tsconfig.json` file for the javascript import export support.

make sure that your `target` property in `tsconfig.json` file is set to `ES6`.

```json
"target": "ES6"
```

also change your `module` property to `ES2015`

```json
"module": "ES2015"
```

now to export something just use the `export` keyword in front of your variable

```typescript
export const module = "this is modular variable";
```

importing file is not so different in typescript. just use the `import` syntax. but make sure that you are using `.js` extension instead of `.ts` extension in import file location.

```typescript
import { module } from "./module.js";
```

## Interface In Typescript

interface is a common term in OOP language. interface is like a blue print or structure of a class.

```typescript
interface user {
  readonly name: string;
  id: number;

  login(password: string): string;
  logout(id: number): string;
}
```

by using interface we can specify the properties that a class should have. to use interface we need to use the `implements` keyword.

```typescript
class User implements user {
  constructor(
    readonly name: string,
    public id: number,
    private password: string
  ) {}

  // log in function
  login(password: string): string {
    if (password === this.password) {
      return "logged in successfully";
    }

    return "password not matched";
  }

  //   log out function
  logout(id: number): string {
    if (id === this.id) {
      return "log out successfully";
    }

    return "id not matched";
  }
}
```

but we can't use the `private` access modifier in interface. also we can use interface as a replacement of type alias.

```typescript
interface rectOptions {
  width: number;
  length: number;
}

const drawRect = (options: rectOptions) => {
  let width = options.width;
  let length = options.length;

  console.log({ width, length });
};
```

view full code from the [interface.ts](./src/interface.ts) file.
