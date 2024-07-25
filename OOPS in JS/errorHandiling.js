let a = 5;
let b = 3;
console.log("a =",a);
console.log("a =",b);
console.log("a+b =",a+b);
try{
    
console.log("a+b =",a+c);  //error
}catch(err){
    console.log(err);
} //ReferenceError: c is not defined at errorHandiling.js:8:23
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
