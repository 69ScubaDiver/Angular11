// TypeScript Types

// Number -- No int, long, etc
// Boolean
// String 
// string[]
// any 
// undefined 

// Variable Declaration in TypeScript
// The type syntax for declaring a variable in TypeScript is to include a colon (:) after 
//	the variable name, followed by its type. Just as in JavaScript, we use the var keyword to declare a variable.
// 
// When you declare a variable, you have four options −
// 
//	
// 1. Declare its type and value in one statement.
// 		var [identifier] : [type-notation] = value ;
//		var name:string = ”mary”;
// 
// 2. Declare its type but no value. In this case, the variable will be set to undefined.
// 		var [identifier] : [type-notation] ;
// 		var name:string;
//
// 3. Declare its value but no type. The variable type will be set to the data type of the assigned value.
// 		var [identifier] = value ;
//		var name = ”mary”
// 		The variable’s type is inferred from the data type of the value. Here, the variable is of the type string
// 
//4. Declare neither value not type. In this case, the data type of the variable will be any and will be initialized to undefined.
// 		var [identifier] ;
//		var name;
//		The variable’s data type is any. Its value is set to undefined by default.
// 
// var name  : string = "John";
// var score1:number = 50;
// var score2:number = 42.50
// var sum = score1 + score2
// 
// console.log("name"+name) 
// console.log("first score: "+score1) 
// console.log("second score: "+score2) 
// console.log("sum of the scores: "+sum) 

var x : number;
x = 31;
console.log(x);


var flag : boolean = true;

if ( flag ) {
    console.log(x);    
}


var firstname :string = 'Hello World';
console.log("Name:[" + firstname + "]");
