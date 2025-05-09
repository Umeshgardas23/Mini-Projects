// Variables

// var data1 = "Rushikesh";
// Global scope
// we can reassign the value and we can redeclare the variable as well
// console.log(data1);
// var data1 = 40;
// data1 = false;
// data1 = 3.65;
// data1 = undefined;

// console.log(data1);

// let data2 = "Jasodaannada";
// Block scope
// we can reassign the value and we cannot redeclare the variable as well
// console.log(data2);
// data2 = true;
// console.log(data2);

// const PI = 3.14;
// const speedoflight = 280000;
// Block scope
// we cannot reassign the value and we cannot redeclare the variable as well
// console.log(PI);

// variable are containers for data

// Data types
// Primitives
// String, Number, Boolean, null, BigInt, undefined
// "Darshana", 25, true / false, null, BigInt(4684561684646854684), undefined;
// const data4 = BigInt(5684684684684);
// console.log(typeof data4);
// if (typeof data4 === bigint) {
//   console.log("Data type is bigint");
// }

// Reference/Non Primitive
// Object, Array - [Object];

// const student = { id: 1, name: "Umesh", age: 40 };
// console.log(typeof student);

// const arr = [22, "Rushi", true, false, undefined, null];
// console.log(typeof arr);

// function add(arg1, arg2) {
//   return arg1 + arg2;
// }

// IIF(immediate invoke function)

// (function () {
//   console.log("IIF");
//   console.log(add(2, 4));
// })();

// Arrow function
// let mul = (arg1, arg2) => arg1 * arg2;
// console.log(mul(9, 6));

// let backend = "Rush";
// NoN -Not a number
// console.log(isNaN("false"));
// if (isNaN(backend)) {
//   console.log("This is not a number");
// } else {
//   console.log("This is number");
// }

// false - 0
// true - 1
// null - number
// 38 -

// Object

// An object is a collection of properties
const mobile = {
  model: "iphone",
  memory: 128,
  screen: "100 inch",
  camera: "8 mega pixel",
  getscreenandmemory: function () {
    return (
      "screen size is" +
      " " +
      this.screen +
      " " +
      "and memory is" +
      " " +
      this.memory +
      "GB"
    );
  },
};

// get
// console.log(mobile.model);
// console.log(mobile["camera"]);
// console.log(mobile.getscreenandmemory());

// console.log(mobile.memory);

// update/add property
// mobile.memory = "256";
// console.log(mobile.ram);
// mobile.ram = "12GB";
// console.log(mobile.memory);
// console.log(mobile.ram);

// delete
// delete mobile.memory;
// console.log(mobile.memory);

// Array -methods
// is a special kind of object
// type of - object
// Its not fixed length
// Homoegeneous (any thing of variable)

// Array - indexes - Array thos objects which works on indexes mobile[0]
//  - Object which works on names (mobile['camera'])

// const arr = [34, "maxx", true, false, undefined, null];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   console.log(element);
// }
// console.log(typeof arr);

// 3 ways of array

// const arr1 = ["audi", "bmw", "maruti"];
// Faster

// const arr2 = [];
// arr2[0] = "verna";
// arr2[1] = "b1";
// arr2[2] = "h1";
// Moderate

// const arr3 = new Array("kia", "sonei", "sento");
// this is not preferable its slow bcoz of constructor

const arr = [1, 2, 3, 4, 5, 6, undefined, false, true];
// const arr4 = [89, 45, undefined, false, true, "zoom"];
// console.log(arr.toString());

// Join
// console.log(arr.join(":"));

// Pop() -remove the element from last
// const result = arr.pop();
// console.log(arr);

// Shift - remove the element but first
// arr.shift();
// console.log(arr);

// unshift - adding new ele at start
// arr.unshift("hyudai");
// console.log(arr);

// splice - add new element into array at any specific index

console.log(arr);
arr.splice(1, 0, "tata", "chevrolet");
// arr.splice(starting index, delete count, ["tata", "chevrolet"]);
console.log(arr);
