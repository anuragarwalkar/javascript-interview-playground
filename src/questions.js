// *********************************************************************
// To what evaluates typeof a and typeof b in the following snippet:
function foo() {
  let a = b = 0; // prettier-ignore
  a++;
  return a;
}
foo();
console.log(typeof a); // => ???
console.log(typeof b); // => ???
// *********************************************************************

// *********************************************************************
// What is the value of clothes[0]:
const clothes = ["jacket", "t-shirt"];
const copiedClothes = clothes;
copiedClothes.length = 0;
console.log(clothes[0]); // => ???
// *********************************************************************

// *********************************************************************
// What will output to console the following code:
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
// *********************************************************************

// *********************************************************************
// What’s the result of the equality check?
console.log(0.1 + 0.2 === 0.3); // => why???
// *********************************************************************

// what is ans of the console log
function a() {
  return "hello";
}
const sentence = a`hi`;
console.log("sentence:", sentence);
// *********************************************************************

// *********************************************************************
// Tell sequence of the console logs
const callMe = () => new Promise((resolve) => resolve("Hi from promise! 👋"));

const funcA = () => {
  // Calling setTimeout
  setTimeout(() => console.log("Hello from setTimeout ⏳"), 0);

  // Consuming Promise
  callMe().then((res) => console.log(res));

  console.log("Inside funcA 👽");
};

const funcB = async () => {
  console.log(await callMe());
  console.log("Inside funcB 🔥");
};

funcA();
funcB();
// *********************************************************************

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// What prototype inheritance
Object.prototype.name = "Anurag Arwalkar";
const number = 0;
const array = [];

console.log(array.name);
console.log(number.name);
// *********************************************************************

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Write a function called sum ... if you pass the arguments like this then
// it should give the total sum

const sum = () => {
  // Implement
};
console.log(sum(1)(2)(3)());
// console.log(sum(1)(2)(3)....());
// Output 6
// *********************************************************************