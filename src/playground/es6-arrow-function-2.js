const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1));

const user = {
    name: "Chris",
    cities: ["Cooper City", "Orlando", "Davie"],
    printPlacesLived()  {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived());

//Challenge Area

const multiplier = {
    numbers: [6, 7, 9],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((multiple) => multiple * this.multiplyBy); 
    }
}

console.log(multiplier.multiply());