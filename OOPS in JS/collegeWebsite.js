let DATA = "secret information";

class User{
    constructor(name,email){
        this.name=name;
        this.email= email;
    }
    viewData(){
        console.log("Website data");
    }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new value";
    }
}

let student1 = new User("Soham Mayur","cse22018@cemk.ac.in");
let student2 = new User("Sagnik Metiya","cse22008@cemk.ac.in");
let student3 = new User("Raja Das","cse22036@cemk.ac.in");

let teacher1 = new User("Kazi Islam","kazi123@cemk.ac.in");

let admin1 = new Admin("admin","admin@cemk.ac.in");
