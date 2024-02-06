var a = "Hi! Birender";
var b = 5;
var c: boolean = false  // var c = false 

var someArray: string[] = [] // in case if we want to push any type of variable in array, use type any[]
someArray.push(a);
someArray.push(b as any);   // other method of using any is by casting
console.log(someArray);