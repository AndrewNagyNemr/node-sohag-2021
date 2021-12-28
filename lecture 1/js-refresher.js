// const vs let vs var
//=============================================
// const x = 2;
// let x = 1

// x = 2

// let x = 3

// var x = 1;

// var x = 2;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// i = i+1

// for (const i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

// let i;

// console.log(i);

//=============================================
// arrow functions

// function add(a, b) {
//     return a + b
// }


// const add = function (a, b) {
//     return a + b
// }

// explicit return

// const add = (a, b) => {
//     return a + b
// }

// implicit return

// const add = (a, b) => a + b


// const add = (a, b) => { a + b }

// const result = add(1, 2);

// console.log(result);



//=============================================
// implicit explicit return
//=============================================
// array functions

// const arr = [1, 2, 3, 4];
//map

// const result = arr.map(i => i * 2);

// const result = arr.map(i => { i * 2 });
// console.log(result);

//filter

// const result = arr.filter(i => i % 2 === 0)
// const result = arr.filter(i => {i % 2 === 0})
// const result = arr.filter(i => { return true })
// const result = arr.filter(i =>  true )
// console.log(result);

//find
// const arr = [1, 2, 3, 4];
// const result = arr.find(i => i % 2 === 0)
// const result = arr.find(i => {i % 2 === 0})
// console.log(result);
//=============================================
//=============================================
//findIndex
//=============================================
// equality
// == values
// 1 == "1"

// strict equality
// === values, types
// 1 === "1"
//=============================================
// destructuring
// const person = {
//     name: "Galal",
//     age: 24
// }

// const name = person.name;
// const age = person.age;

// const { name: personName, age } = person;

// const arr = [1, 2, 3, 4, 5];

// const first = arr[0];
// const second = arr[1];

// const [first, second] = arr;
// const [, , third] = arr;


//=============================================
// value type , reference type

// const person = {
//     name: "Galal",
//     age: 24
// }

// const person2 = {
//     name: "Galal",
//     age: 24
// }
// const person2 = { ...person }
// const person2 = person 

// console.log(person === person2);

// person.name = "Mohammed"

//=============================================
// npm 
//=============================================
//==> npm init 
//==> generate package.json
//==> npm i <package-name>  // within the project 
//==> update package.json dependencies
//==> add package-lock.json 
//==> add node_modules //=> must be added to .gitignore
//==> To install global package => npm i -g <package-name> //sudo
//Alternative
//npx create-react-app <app-name>

//to uninstall => npm un <package-name>
//=============================================
// Install nodejs
// clone the simplified app 
// npm i 

// console.log("hello world")