var a = "Hi! Birender";
var b = 5;
var c = false; // var c = false 
var someArray = []; // in case if we want to push any type of variable in array, use type any[]
someArray.push(a);
someArray.push(b); // other method of using any is by casting
console.log(someArray);
//functions can also have types
function generateEmail(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    return `${input.firstName}234${input.lastName}@gmail.com`;
}
//checking and making for if person is valid or not by making type guards 
function isPerson(potentialUser) {
    if ('firstName' in potentialUser && 'lastName' in potentialUser) {
        return true;
    }
    else {
        return false;
    }
}
//prinitng the input if the person is valid 
function printEmailIfPerson(potentialUser) {
    if (isPerson(potentialUser)) {
        console.log(generateEmail(potentialUser));
    }
    else {
        console.log('Input is not a person');
    }
}
printEmailIfPerson({
    firstName: 'abc',
    lastName: 'decf'
});
async function someAsync() {
    return 'async';
}
