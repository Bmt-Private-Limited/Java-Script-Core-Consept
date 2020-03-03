class parent {
    constructor(){
        this.FatherName = "manas Kr. Mandal"
    }
}


class child extends parent{
    constructor(name){
        super()
        this.Name = name;
    }
    getFullName(){
        return this.Name + " " + this.FatherName
    }
}
const baby = new child("Biswarup Mandal")
const baby2 = new child("Madhu Mandal")
// console.log(baby);
// console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());


