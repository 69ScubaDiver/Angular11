console.log("===================");

let grade = 90;
console.log("=== Grade is " + grade + " ===");

if (grade >= 85 && grade <= 100) {
	console.log("Grade A");
} else if (grade >= 75 && grade < 85) {
	console.log("Grade B");
} else if (grade >= 65 && grade < 75) {
	console.log("Grade C");
} else if (grade >= 55 && grade < 65) {
	console.log("Grade D");
} else if (grade >= 45 && grade < 55) {
	console.log("Grade E");
} else if (grade >= 0 && grade < 45) {
	console.log("Failed");
} else {
	console.log("Grade value not valid");
}