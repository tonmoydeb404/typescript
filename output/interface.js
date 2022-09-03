"use strict";
// implementing the user interface
class User {
    constructor(name, id, password) {
        this.name = name;
        this.id = id;
        this.password = password;
    }
}
const drawRect = (options) => {
    let width = options.width;
    let length = options.length;
    console.log({ width, length });
};
