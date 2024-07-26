// All power is within you;you can do anything and everything

/** const student = {
    fullName: "Anish Kanrar",
    marks: 97.8,
    printMarks: function () {
        console.log("marks = ", this.marks);  //this--->student.marks
    },
};*/


const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
    // calcTax2 : function() {
    //     console.log("tax rate is 10%")
    // },
};

const anikDas = {
    salary: 5000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

anikDas.__proto__ = employee;

// class is a program-code template for creating objects.

class ToyotaCar {
    constructor() {
        console.log("creating new object");
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar("fortuner");  //constructor
// fortuner.setBrand("fortuner");
console.log(fortuner)
let lexus = new ToyotaCar();  //constructor
// lexus.setBrand("lexus");
console.log(lexus)

//inheritance is passing down properties & methods from parent class to chaild class

class Person {
    constructor(name) {
        // console.log("Enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
}

class Enginner extends Person {
    constructor(name) {
        super(name); //to invoke parent class constructor

    }
    work() {
        super.eat();
        console.log("solve problem, build something");
    }
}
let engObj = new Enginner("Anik");

//super keyword-->The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
