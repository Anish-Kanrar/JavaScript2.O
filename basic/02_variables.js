const accountId = 122990  //constant
let accountEmail = "anish@gmail.com"
var accountPassword = "12345"  //not prefore in this way
accountCity = "Kolkata"        //not prefore
let accountState;              //output will be "undefine"
//accountId = 2   //not allowed,constant does not change

accountEmail = "an@an.com"
accountPassword = "919191917"
accountCity = "Pune"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope   //{ }
*/

//table method
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])