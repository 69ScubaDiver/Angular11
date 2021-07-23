
console.log("=== Sample 1 ===")

for (let i=1;i<10;i++) {
	console.log("Hello["+i+"]")
}

console.log("=== Sample 2 ===")

const cars = ["Volkswagen", "BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  //text += x;
  console.log(x);
}
