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

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major; 
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

//Traveler - Extends Person
//Add support for homeLocation 
//Override getGreeting
//1. Hi. I am .name. I'm visiting from .homeLocation
//2. Hi I am .name.

class Traveler extends Person {
    constructor(name, homeLocation) {
        super(name);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting; 
    }
}

const me = new Traveler("Chris Jimenez", "Fort Lauderdale");
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());