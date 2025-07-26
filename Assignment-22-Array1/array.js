// 1. Reverse an array manually:
//     - The loop condition should be i >= 0, not 1 >= 0.
//     - The return statement should be outside the loop.


function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}


// 2. Find the second-largest number in an array:
//     - The initial value of largest should be -Infinity, not Infinity.
//     - There's a syntax error in the else if condition, it should be else if (num > second && num < largest).


function secondLargest(arr) {
  let largest = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }
  return second;
}


// 3. Merge two arrays without duplicates:
//     - There's a syntax error in the function name, it should be mergeWithoutDuplicates.
//     - The function seems correct, but the variable names are different in the function definition and function call.


function mergeWithoutDuplicates(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}


// 4. Find the frequency of each element in an array:
//     - The freq object should be initialized as an empty object {}.
//     - The syntax freq[num] = (freq[num] || 0) + 1 is correct.


function frequencyCount(arr) {
  let freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
}


// 5. Implement a manual version of the includes method:
    // - The function seems correct.


function manualIncludes(arr, value) {
  for (let item of arr) {
    if (item === value) return true;
  }
  return false;
}


// 6. Shift elements in an array to the left by one position:
    // - The function seems mostly correct, but there's a syntax error in the return statement, it should be return arr;.


function shiftLeft(arr) {
  if (arr.length === 0) return arr;
  let first = arr.shift();
  arr.push(first);
  return arr;
}


// 7. Remove all duplicate elements in an array:
    // - The function seems correct.


function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// 8. Create a 2D array representing a multiplication table for numbers 1 to 10:
    // - The function seems mostly correct, but there are syntax errors in the loop conditions and the table initialization.


function multiplicationTable() {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    let row = [];
    for (let j = 1; j <= 10; j++) {
      row.push(i * j);
    }
    table.push(row);
  }
  return table;
}


// 9. Find the intersection of two arrays:
//     - The function seems correct.


function intersection(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
