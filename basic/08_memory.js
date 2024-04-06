// Stack(primitive) , Heap(Non-primitive)
//copy,reference(original value ka)

/*
let myYoutubename = "AnishKanrardotcom"
let anotherName = myYoutubename

console.log(anotherName)   //AnishKanrardotcom
*/




let myYoutubename = "AnishKanrardotcom"
let anotherName = myYoutubename
anotherName = "Cricket with AB"

console.log(myYoutubename)  //AnishKanrardotcom
console.log(anotherName)   //Cricket with AB

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "anish@google.com";

console.log(userOne.email);  //anish@google.com
console.log(userTwo.email);   //anish@google.com


