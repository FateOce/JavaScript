let firstName = "Christine"
let lastName = "Dee"
let price = 10;
let taxRate = 0.05;
let total;

//console.log("Hello "+firstName+" "+lastName+"!");
console.log(`Hello ${firstName} 
${lastName}!`);

console.log(`The price is: $${price}`);
console.log(`tax rate: ${taxRate}`);
console.log(`tax is: $${price * taxRate}`);
console.log(`Total is: $${total = price + (price * taxRate)}`);

