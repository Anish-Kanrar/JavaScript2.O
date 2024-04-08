//array -> The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
/*
1.JavaScript arrays are resizable and can contain a mix of different data types. 
2.JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3.JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
4.JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/

//const myArr = [0, 1, 2, 3, 4, 5, true, 'anish']  //1

const myArr = [0, 1, 2, 3, 4, 5]
const myCricketer = ["Virat", "Dhoni", "Rohit"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);  //1
console.log(myArr[3]);  //3

//Array methods

/*
myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr); //[0, 1, 2, 3, 4, 5, 6]
*/

/*
myArr.unshift(9)
myArr.shift()  //here do not use parameter
console.log(myArr);
*/

console.log(myArr.includes(9));   //false
console.log(myArr.indexOf(9));  //-1
console.log(myArr.indexOf(3));  //3


const newArr = myArr.join()

console.log(myArr);  //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr);  //0,1,2,3,4,5
console.log(typeof newArr);  //string

// slice, splice
console.log("A ", myArr);  //A  [ 0, 1, 2, 3, 4, 5 ]

//slice
const myn1 = myArr.slice(1, 3)
console.log(myn1);        //[ 1, 2 ]*
console.log("B ",myArr);  //B  [ 0, 1, 2, 3, 4, 5 ]**

//splice
const myn2 = myArr.splice(1, 3)
console.log("C ",myArr);  //C  [ 0, 4, 5 ]**
console.log(myn2);  //[ 1, 2, 3 ]*