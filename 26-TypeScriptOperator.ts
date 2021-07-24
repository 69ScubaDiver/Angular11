
// Mathematic
var firstnumber, secondnumber, result : number;
firstnumber = 22;
secondnumber = 10;

result = firstnumber + secondnumber;
console.log('Result is: ['+ result + ']');

// Operator % 
var xyz : number = 23; 
result = xyz % 2;
console.log('Result is: ['+ result + ']');

// Relational Operator : Test kind of relationship between two 
// entities, it always return boolean (true, false )
var a, b : number;
var c : boolean; 
a = 20;
b = 2;
c = a > b;  
console.log('c is: ['+ c + ']');

// Logical Operator - Combine two or more conditions 

var a, b, d, e : number;
var bResult : boolean; 
a = 20;
b = 2;
d = 35;
e = 5;
bResult = (a > b);  
console.log('bResult is: ['+ bResult + ']');

bResult = ( d < e);
console.log('bResult is: ['+ bResult + ']');

bResult = (a>b) && (d<e);
console.log('bResult is: ['+ bResult + ']');

bResult = (a<b) || (d<e);
console.log('bResult is: ['+ bResult + ']');


// Conditional Operator 
var a, b : number;
var cResult : string; 
a = 15;
b = -4;
cResult = b > 0 ? 'Positive' : 'Negative'
console.log('cResult is: ['+ cResult + ']');




