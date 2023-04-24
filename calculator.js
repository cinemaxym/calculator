/*
The followind program asks the user two numbers and what operation they would like to perform 
then prints the result.    
*/
// ARROW VERSION

//This function will add the two numbers together 
const add = (value1, value2) => {
    total = value1 + value2;
    console.log(`${value1} + ${value2} = ${total}`)
} 

//This function will subtract the second number from the first number.
const subtract = (value1, value2) => {
    total = value1 - value2;
    console.log(`${value1} - ${value2} = ${total}`)
} 

//This function will multiply the two numbers together.
const multiply = (value1, value2) => {
    total = value1 * value2;
    console.log(`${value1} * ${value2} = ${total}`)
} 

//This function will divide the first number by the second number.
const divide = (value1, value2) => {
    total = value1 / value2;
    console.log(`${value1} / ${value2} = ${total}`)
}

//Asks the user two numbers and what operation they would like to perform  
let inputNumber1 = Number(prompt("Please enter the first number"));
let inputNumber2 = Number(prompt("Please enter the second number"));
let operation = prompt("What operation you would like to perform? \n a. add \n b. subtract \n c. multiply \n d. divide")
switch (operation) {                         
    case "a":
        add(inputNumber1, inputNumber2);
        break;
    case "b":
        subtract(inputNumber1, inputNumber2);
        break;
    case "c":
        multiply(inputNumber1, inputNumber2);
        break;
    case "d":
        divide(inputNumber1, inputNumber2);
        break;
    default:
        break;
}
