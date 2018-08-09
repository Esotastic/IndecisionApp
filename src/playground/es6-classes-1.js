
//set up constructor to take age, default to 0 
//getDescription - .name is .age year(s) old. 

class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

const me = new Person("Chris Jimenez", 30);
console.log(me.getDescription());

const other = new Person();
console.log(other);