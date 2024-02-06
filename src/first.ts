// var greet = "Hi! Birender";
// var b = 5;
// var c: boolean = false  // var c = false

// var someArray: string[] = [] // in case if we want to push any type of variable in array, use type any[]
// someArray.push(greet);
// someArray.push(b as any);   // other method of using any is by casting
// console.log(someArray);

import { IServer } from "./Server";

//typescript also provide interface to define the type of function inputs  -- these interfaces and parameters don't exists during runtime
interface Personz {
    firstName: string,
    lastName: string,
    job?: job, //we can also create optional props using ?
    isVisitor?: boolean
}

//using the original type also, we can define the type of the variables 
type job = 'Engineer' | 'Programmer';

//functions can also have types
function generateEmail(input: Personz, force?: boolean): string | undefined {
    if (input.isVisitor && !force) {
        return undefined
    }
    return `${input.firstName}234${input.lastName}@gmail.com`
}

//checking and making for if person is valid or not by making type guards 
function isPerson(potentialUser: any): boolean {
    if ('firstName' in potentialUser && 'lastName' in potentialUser) {
        return true;
    }
    else {
        return false
    }
}

//prinitng the input if the person is valid 
function printEmailIfPerson(potentialUser: any): void {
    if (isPerson(potentialUser)) {
        console.log(generateEmail(potentialUser))
    } else {
        console.log('Input is not a person')
    }
}

printEmailIfPerson({
    firstName: 'abc',
    lastName: 'decf'
})

async function someAsync() {
    return 'async'
}