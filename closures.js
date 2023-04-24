
// The following program has one main number that will be used to multiply all
// other numbers. 
// The program loops through 10 numbers and push them into
// the inner scope of callback function.

function multiply(a) {
    return function () {
        for (i = 0; i <= 10; i++){
            console.log(`${a} * ${i} = ${a*i}`)
        }
    }
}

const multiplyBy10 = multiply(10); 
multiplyBy10();                      //calls the inner function 

