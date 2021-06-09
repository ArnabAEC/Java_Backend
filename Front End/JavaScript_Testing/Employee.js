const Person = require('./person').Person;

class employee extends Person{
    constructor(name , age , salary){
        super(name, age);
        this.salary = salary;
    }

    getSalary = () => this.salary;

    print = () => console.log("Name : " + super.getName() + " \tAge : " +super.getAge() + "\tSalary : "+ this.salary);
}

let e1 = new employee("Polo", 21, 6000);
e1.print();

module.exports = {employee};