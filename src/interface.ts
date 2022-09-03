// creating user blueprint with interface
interface user {
  readonly name: string;
  id: number;

  login(password: string): string;
  logout(id: number): string;
}

// implementing the user interface
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

// using interface as like as type alias
interface rectOptions {
  width: number;
  length: number;
}

const drawRect = (options: rectOptions) => {
  let width = options.width;
  let length = options.length;

  console.log({ width, length });
};
