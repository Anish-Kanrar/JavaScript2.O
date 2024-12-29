
const score = 500
console.log(score)  //500

const balance = new Number(100)
console.log(balance); //[Number: 100]

console.log(balance.toString())  //100
console.log(balance.toString().length)  //3

console.log(balance.toFixed(2))  //100.00
console.log(balance.toFixed(3))  //100.000
console.log(balance.toFixed(4))  //100.0000

/*
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  //23.9

const otherNumber1 = 123.567
console.log(otherNumber1.toPrecision(3));  //124
*/

const hundreds = 1000000
console.log(hundreds.toLocaleString());  //1,000,000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000

//********************************Math************************************//

console.log(Math);
console.log(Math.abs(-8))  //8      '+'--->'-'
console.log(Math.round(4.6))  //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.min(11,22,33,44)); //11
console.log(Math.max(11,22,33,44)); //44

console.log(Math.random()); //0.7617344829514918,0.4134039674339325,always between 0,1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);  //1 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
