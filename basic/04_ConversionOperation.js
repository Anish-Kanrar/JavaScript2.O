// As a number
/*let score = 33
console.log(typeof score);
console.log(typeof (score));  //method */

//investing study
//As a string
/*
let score = "99"
console.log(typeof score);
console.log(typeof (score));  //method


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
*/

/*
let score = "99abc"
console.log(typeof score);   //string
console.log(typeof (score));  //method  //string


let valueInNumber = Number(score)
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);  //NaN
*/

/*
let score = null
console.log(typeof score);   //object
console.log(typeof (score));  //method  //object

let valueInNumber = Number(score)  
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);    //0
*/

/*
let score = undefined
console.log(typeof score);   //undefined
console.log(typeof (score));  //method  //undefined

let valueInNumber = Number(score)  
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);    //NaN
*/

/*
let score = true
console.log(typeof score);   //boolean
console.log(typeof (score));  //method  //boolean


let valueInNumber = Number(score)  
console.log(typeof valueInNumber);  //number
console.log(valueInNumber);    //1     //true => 1 , false => 0
*/

//"99" => 99
//"99abc" => NaN(Not a Number)
//true => 1 ; false => 0

/*
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

output=>true
*/

/*
let isLoggedIn = 0
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

output=>false
*/

/*
let isLoggedIn = "Kohali"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//output=>true
*/

//1 =>true ; 0 => false
//" " =>false ; "Kohali" => true

let someNumber = 99

let stringNumber = String(someNumber)
console.log(stringNumber);   //99
console.log(typeof stringNumber);  //string