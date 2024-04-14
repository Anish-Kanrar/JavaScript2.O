//singleton
// Object.create

//object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "Anish",
    "full name" : "Anish Kanrar",
    [mySym]: "mykey1",
    age : 18,
    location : "Kolkata",
    email: "anish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

console.log(JsUser.email);  //anish@google.com
console.log(JsUser["email"]);  //anish@google.com
console.log(JsUser["full name"]);  //Anish Kanrar
console.log(JsUser[mySym]);   //mykey1


JsUser.email = "anish@chatgpt4.com"
//Object.freeze(JsUser);
JsUser.email = "anish@microsoft.com"
console.log(JsUser);

/*
{
    name: 'Anish',
    'full name': 'Anish Kanrar',
    age: 18,
    location: 'Kolkata',
    email: 'anish@chatgpt4.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Thursday' ],
    [Symbol(key1)]: 'mykey1'
}
*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
// console.log(JsUser.greeting)   //undefined
console.log(JsUser.greeting())   //Hello JS user
console.log(JsUser.greetingTwo())   //Hello JS user,Anish