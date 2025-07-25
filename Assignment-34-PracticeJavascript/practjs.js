// Assignment-1

function reverseWords(sentence) {
  let reversedSentence = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  console.log(`Original Sentence: ${sentence}`);
  console.log(`Reversed Sentence: ${reversedSentence}`);
}

let sentence = "Hello From Swapnilllllllllll, Aaj khup paus ahe";
reverseWords(sentence);


// Assignment-5 
const createSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
}

let title = "Learn JavaScript in 30 Days!";
console.log(createSlug(title));

// Assignment-10

function calculate(expression) {
  try {
    let result = Function('"use strict";return (' + expression + ')')();
    return result;
  } catch (e) {
    return "Invalid expression";
  }
}

let expression = "3+5*2-4/2";
console.log(calculate(expression));