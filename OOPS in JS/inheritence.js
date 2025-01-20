class person{
    constructor(){
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    work(){
        console.log("do nothing");
    }
}


class Enginner extends person{
    work(){
        console.log("solve problem, build something");
    }
}

class Doctor extends person{
    work(){
        console.log("treat patients");
    }
}
