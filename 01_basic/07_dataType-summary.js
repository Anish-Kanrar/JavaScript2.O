//Primitive data type
//7 type : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTEMP = null  //object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);  //false

//const bigNumber = 12746557643565354n  //bigInt



//Reference Type(Non primitive datatype)
//Array, Objects, Functions

const cricketer = ["Virat", "Maxwell", "Green"]   //array

//Objects
let myObj = {
    name: "Anish",
    age: 20,
}

//function(){}     //this is function defination 
const myFunction = function(){
    console.log("Hello CEMKians");
}

//The typeof Operater
console.log(typeof bigNumber) //undefined
console.log(typeof myFunction); //function
console.log(typeof cricketer)   //object

//for interview