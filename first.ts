var a = "Hi! Birender";
var b = 5;
var c: boolean = false  // var c = false 

var someArray: string[] = [] // in case if we want to push any type of variable in array, use type any[]
someArray.push(a);
someArray.push(b as any);   // other method of using any is by casting
console.log(someArray);

//typescript also provide interface to define the type of function inputs
interface Person {
    firstName: string,
    lastName: string,
    job?: job, //we can also create optional props using ?
    isVisitor?: boolean
}

//using the original type also, we can define the type of the variables 
type job = 'Engineer' | 'Programmer';

//functions can also have types
function generateEmail(input: Person, force?: boolean): string | undefined {
    if (input.isVisitor && !force) {
        return undefined
    }
    return `${input.firstName}234${input.lastName}@gmail.com`
}

console.log(generateEmail({
    firstName: 'birender',
    lastName: 'singh',
    job: 'Engineer',
    isVisitor: true
}, true))