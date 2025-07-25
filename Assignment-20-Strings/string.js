// Get the textarea and answer div elements
let textarea = document.getElementById('floatingTextarea');
let answerDiv = document.querySelector('.ans');

// Function to count vowels
function countVowels() {
  let text = textarea.value.toLowerCase();
  let vowels = text.match(/[aeiou]/g);
  answerDiv.innerText = `Number of vowels: ${vowels ? vowels.length : 0}`;
}

// Function to check palindrome
function checkPalindrome() {
  let text = textarea.value.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedText = text.split('').reverse().join('');
  answerDiv.innerText = text === reversedText ? 'The text is a palindrome.' : 'The text is not a palindrome.';
}

// Function to extract first word
function extractFirstWord() {
  let text = textarea.value.trim();
  let words = text.split(' ');
  answerDiv.innerText = `First word: ${words[0]}`;
}

// Function to replace with "-"
function replaceWithHyphen() {
  let text = textarea.value;
  let replacedText = text.replace(/ /g, '-');
  answerDiv.innerText = replacedText;
}

// Function to split into array of words
function splitIntoArray() {
  let text = textarea.value.trim();
  let words = text.split(' ');
  answerDiv.innerText = `Array of words: ${JSON.stringify(words)}`;
}

// Function to convert to uppercase
function convertToUppercase() {
  let text = textarea.value;
  answerDiv.innerText = text.toUpperCase();
}

// Function to reverse characters
function reverseCharacters() {
  let text = textarea.value;
  let reversedText = text.split('').reverse().join('');
  answerDiv.innerText = reversedText;
}

// Function to count occurrences of specific character
function countOccurrences() {
  let text = textarea.value.toLowerCase();
  let char = prompt('Enter a character:').toLowerCase();
  let occurrences = text.split(char).length - 1;
  answerDiv.innerText = `Number of occurrences of '${char}': ${occurrences}`;
}

// Function to remove non-alphanumeric characters
function removeNonAlphanumeric() {
  let text = textarea.value;
  let cleanedText = text.replace(/[^a-zA-Z0-9]/g, '');
  answerDiv.innerText = cleanedText;
}

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    switch (button.innerText) {
      case 'Count Vowels':
        countVowels();
        break;
      case 'Check Palindrome':
        checkPalindrome();
        break;
      case 'Extract First Word':
        extractFirstWord();
        break;
      case 'Replace With "-"':
        replaceWithHyphen();
        break;
      case 'Split into array of words':
        splitIntoArray();
        break;
      case 'Covert into Uppercase':
        convertToUppercase();
        break;
      case 'Reverse Character':
        reverseCharacters();
        break;
      case 'Cout number of occurance of specific character':
        countOccurrences();
        break;
      case 'Remove all nonalpha numerics':
        removeNonAlphanumeric();
        break;
    }
  });
});