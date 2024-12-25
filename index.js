const ps = require("prompt-sync");
const prompt = ps();

console.log("This is week 1 exercise written by Akhmadshokh Azatov");
let number1 = parseInt(prompt("Enter a number "));
let number2 = parseInt(prompt("Enter the second number "));
console.log("What to do? \n 1 - Add   \n   2 - Subtract    \n    3 - Multiply   \n     4 - Divide  ");
let operation = parseInt(prompt("... "));

if (operation == 1){
    console.log(number1+" + "+number2+" = "+(number1+number2));}
else if (operation == 2){
    console.log(number1+" - "+number2+" = "+(number1-number2));
}
else if (operation == 3){
    console.log(number1+" x "+number2+" = "+(number1*number2));
}
else {
    console.log(number1+" / "+number2+" = "+(number1/number2));
}
