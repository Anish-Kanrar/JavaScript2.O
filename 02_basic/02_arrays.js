const batsman =["Virat", "Rahit", "Rahul"]
const bowler = ["Bumrah","Shami","Siraj"]


// batsman.push(bowler)
// console.log(batsman);  //[ 'Virat', 'Rahit', 'Rahul', [ 'Bumrah', 'Shami', 'Siraj' ] ]

//concat operator
const allCricker = batsman.concat(bowler);
console.log(allCricker);  //[ 'Virat', 'Rahit', 'Rahul', 'Bumrah', 'Shami', 'Siraj' ]

 // spread operator....glass spread
const all_new_cricketer = [...batsman, ...bowler]
console.log(all_new_cricketer);  //[ 'Virat', 'Rahit', 'Rahul', 'Bumrah', 'Shami', 'Siraj' ],preferable**


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
/* -->[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/

console.log(Array.isArray("Anish")); //false
console.log(Array.from("Anish"));    //[ 'A', 'n', 'i', 's', 'h' ]
console.log(Array.from({name: "Anish"}));    //[], interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]
