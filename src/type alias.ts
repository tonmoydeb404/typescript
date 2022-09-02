// we can create our own type to avoid code repetation
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
