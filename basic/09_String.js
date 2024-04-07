const name = "Anish";
const repoCount = 50;

//console.log(name + repoCount + " Value");  //not recommended,it is older method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello my name is Anish and my repo count is 50

//const gameName = new String("anish-hc");
const gameName = new String("anish-hc-com");

console.log(gameName[0]); //a
console.log(gameName[1]); //n
console.log(gameName.__proto__);

console.log(gameName.length)  //7
console.log(gameName.toUpperCase())  //ANISHHC
console.log(gameName.charAt(3))  //s
console.log(gameName.indexOf('s'))  //3

const newString = gameName.substring(0,4)
console.log(newString);  //anis

const anotherString = gameName.slice(-8,4) 
console.log(anotherString) //anish  //slice->reverse mai o ne sakte hai

const newStringOne = "   rupsa   "
console.log(newStringOne); //in this way space is present //    rupse
console.log(newStringOne.trim());  //remove all unwanted space in string //rupsa
//mdn

const url = "https://anik.com/hitesh%30kanrar"

console.log(url.replace('%30', '-'))  //https://anik.com/hitesh-kanrar

console.log(url.includes('anik'))  //true
console.log(url.includes('anish'))  //false

console.log(gameName.split('-'));  //[ 'anish', 'hc', 'com' ]
