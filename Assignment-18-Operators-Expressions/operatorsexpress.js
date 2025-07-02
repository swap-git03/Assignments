// inputs 
 let num1 = prompt('enter number 1');
 let num2 = prompt('enter number 2');
// 1. arithmatic operations

console.log('addition is', num1 + num2);
console.log('division is', num1 / num2);
console.log('modulus is', num1 % num2);
console.log('exponential is', num1 ** num2);


// 2. 
console.log("if the first number greater than second", num1 > num2);
console.log("if the first number less than second", num1 > num2);
console.log("if the first number equal to second", num1 === num2);


// 3.
let isEligible = (num1 >= 90) && (num2 >= 85);
console.log(isEligible);


// 4, declaring X;

let x = 10;
 x += 5;
console.log(x);


 x -= 10;
console.log(x);

 x *= 3;
console.log(x);


 x /= 2;
console.log(x);


 x %= 3;
console.log(x);



// 5. Operator Precidence
let expr1 = (10 + 3 - 5);
let expr2 = (10 + 3) * 5 ;
let expr3 = 20 / 2 + 3;
let expr4 = 20 / (2 + 3);

console.log("expression 1 is",expr1);
console.log("expression 2 is",expr2);
console.log("expression 3 is",expr3);
console.log("expression 1=4 is",expr4);


// 6. Combined example

let perimeter = 2 * (num1+num2);
console.log("perimeter is" ,perimeter);

// 9. Check even or odd

    // if (num1 % 2 ===0){
    //     console.log('number is even')
    // } else {
    //     console.log('number is odd')
    // }
