// ALL THE QUESTIONS RELATED TO this keyword

const user = {
  name: "Piyush",
  greet() {
    return `Hello ${this.name}!`;
  },
  farewell: () => {
    return `Goodbye ${this.name}!`;
  },
};

console.log(user.greet()); // What is logged?
// greet is a normal function, therefore it will point to user object
// OP - Hello Piyush

console.log(user.farewell()); // What is logged?
// farewell is an arrow function, therefore it will point to the outer scope i.e the parent scope
// OP - Goodbye undefined!
