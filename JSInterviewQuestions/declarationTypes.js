// var vs let vs const
// Scope - it is nothing but an environment where a variable will have access

// var is functional scoped
function test() {
  // This variable is not accessible outside function test
  var a = 5;
}

// let is block scoped
{
  // this variable is not accessible outside this block scope
  let a = 5;
}

// const is block scoped
// Difference between let and const is that we cannot mutate the value of const declaration
{
  // this variable is not accessible outside this block scope
  const a = 5;
}

// SHADOWING
function test2() {
  let a = "Hello";

  if (true) {
    // This variable shadows the other variable
    let a = "Hi";
    console.log(a);
  }

  console.log(a);
}
// O/P:
// Hi
// Hello

// We can shadow var variable using let, but we cannot shadow let variable using var
// Will throw error identifier has already been declared
function test3() {
  var a = "Hello";
  let b = "Bye";

  if (true) {
    let a = "hi";
    var b = "see you";

    console.log(a);
    console.log(b);
  }
}
test3();

// Multiple declarations
var a;
var a;
// We cannot redeclare let and const multiple time with same variable
let b;
let b;
// The above will throw an error

// The below is fine
// Because this comes under shadowing
let c;
{
  let c;
}

// Declaration without values
// We cannot declare const variable without initializing a values as we do in var and let
// ex. const a - This will throw an error Missing initializer

// Hoisting
// var variables are hoisted with undefined before value initialization
// let and const variables are hoisted and they are in a temporal dead zone unless the value is initialized
// let and const will throw an error - cannot access before initialization
