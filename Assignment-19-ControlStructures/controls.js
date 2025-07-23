// Problem 1: Check if number is positive, negative or zero
let number1 = parseFloat(prompt("Enter a number: "));
if (number1 > 0) {
  console.log("The number is positive.");
} else if (number1 < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// Problem 2: Multiplication table
let number2 = parseFloat(prompt("Enter a number: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${number2} x ${i} = ${number2 * i}`);
}

// Problem 3: Number guessing game
let systemGenerateNumber = Math.floor(Math.random() * 10) + 1;
let userNumber;
do {
  userNumber = parseInt(prompt("Enter a number: "));
  if (userNumber < systemGenerateNumber) {
    console.log("Too low! Try again.");
  } else if (userNumber > systemGenerateNumber) {
    console.log("Too high! Try again.");
  }
} while (userNumber !== systemGenerateNumber);
console.log("Correct! You guessed the number.");

// Problem 4: Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Problem 5: Sum of digits
let number5 = Math.abs(parseInt(prompt("Enter a number: ")));
let sum5 = 0;
do {
  sum5 += number5 % 10;
  number5 = Math.floor(number5 / 10);
} while (number5 > 0);
console.log(`Sum of digits: ${sum5}`);

// Problem 6: FizzBuzz
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Problem 7: Prime number checker
let number7 = parseInt(prompt("Enter a number: "));
let isPrime = number7 > 1;
for (let i = 2; i <= Math.sqrt(number7); i++) {
  if (number7 % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime ? `${number7} is a prime number.` : `${number7} is not a prime number.`);

// Problem 8: Star pattern
let rows8 = 5;
for (let i = 1; i <= rows8; i++) {
  console.log("* ".repeat(i));
}

// Problem 9: Largest of three numbers
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let num3 = parseFloat(prompt("Enter the third number: "));
console.log(`The largest number is ${Math.max(num1, num2, num3)}.`);

// Problem 10: Palindrome checker
let str10 = prompt("Enter a string: ").toLowerCase().replace(/\s/g, '');
let revStr10 = str10.split('').reverse().join('');
console.log(str10 === revStr10 ? `${str10} is a palindrome.` : `${str10} is not a palindrome.`);

// Problem 11: Count vowels and consonants
let str11 = prompt("Enter a string: ").toLowerCase().replace(/\s/g, '');
let vowels = 0, consonants = 0;
for (let ch of str11) {
  if (/[a-z]/.test(ch)) {
    if (/[aeiou]/.test(ch)) vowels++;
    else consonants++;
  }
}
console.log(`Vowels: ${vowels}`);
console.log(`Consonants: ${consonants}`);

// Problem 12: Reverse a number
let number12 = parseInt(prompt("Enter a number: "));
let reversed12 = 0;
while (number12 > 0) {
  reversed12 = reversed12 * 10 + (number12 % 10);
  number12 = Math.floor(number12 / 10);
}
console.log(`Reversed number: ${reversed12}`);

// Problem 13: Sum of odd and even numbers from 1 to 100
let sumEven13 = 0, sumOdd13 = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) sumEven13 += i;
  else sumOdd13 += i;
}
console.log(`Sum of even numbers: ${sumEven13}`);
console.log(`Sum of odd numbers: ${sumOdd13}`);

// Problem 14: Factorial using while loop
let num14 = parseInt(prompt("Enter a number: "));
let factorial = 1, i14 = 1;
while (i14 <= num14) {
  factorial *= i14;
  i14++;
}
console.log(`Factorial of ${num14}: ${factorial}`);

// Problem 15: Average of N numbers
let n15 = parseInt(prompt("How many numbers? "));
let sum15 = 0;
for (let i = 1; i <= n15; i++) {
  sum15 += parseFloat(prompt(`Enter number ${i}: `));
}
console.log(`Sum: ${sum15}`);
console.log(`Average: ${sum15 / n15}`);

// Problem 16: Leap year checker
let year = parseInt(prompt("Enter a year: "));
let isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
console.log(isLeap ? `${year} is a leap year.` : `${year} is not a leap year.`);

// Problem 17: Find divisors of a number
let num17 = parseInt(prompt("Enter a number: "));
let divisors = [];
for (let i = 1; i <= num17; i++) {
  if (num17 % i === 0) divisors.push(i);
}
console.log(`Divisors of ${num17}: ${divisors.join(', ')}`);

// Problem 18: Fibonacci sequence
let n18 = parseInt(prompt("How many terms? "));
let fib = [0, 1];
while (fib.length < n18) {
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
}
console.log(`Fibonacci sequence: ${fib.slice(0, n18).join(', ')}`);

// Problem 19: Armstrong number checker
let num19 = parseInt(prompt("Enter a number: "));
let digits = num19.toString().split('');
let power = digits.length;
let sum19 = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), power), 0);
console.log(sum19 === num19 ? `${num19} is an Armstrong number.` : `${num19} is not an Armstrong number.`);

// Problem 20: Number pyramid
let rows20 = 5;
for (let i = 1; i <= rows20; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) row += j;
  for (let k = i - 1; k >= 1; k--) row += k;
  console.log(row);
}
