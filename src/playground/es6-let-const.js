var nameVar = "Andrew";
var nameVar = "Chris";
console.log("nameVar", nameVar);

let nameLet = "Bjorn";
nameLet = "Jules";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

//Block Scoping

const fullName = "Chris Jimenez";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
