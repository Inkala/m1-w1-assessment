// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== 'number' || typeof y !== 'number') return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return num % 2 === 0;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return false;
  }
  var maxNum = 0;
  if (a > b) {
    maxNum = a;
  } else {
    maxNum = b;
  }
  if (maxNum < c) {
    maxNum = c;
  }
  return maxNum;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (Array.isArray(numbers)) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== 'number') {
        return false;
      }
      total += numbers[i];
    }
    return total;
  }
  return false;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  if (!Array.isArray(numbers) || !numbers.length) {
    return false;
  }
  var currentMax = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (currentMax < numbers[i]) {
      currentMax = numbers[i];
    }
  }
  return currentMax;
}

// Return the longest string in an array
function longestString(strings) {
  if (!Array.isArray(strings) || !strings.length) {
    return false;
  }
  var currentLongest = '';
  for (var i = 0; i < strings.length; i++) {
    if (
      typeof strings[i] === 'string' &&
      currentLongest.length < strings[i].length
    ) {
      currentLongest = strings[i];
    }
  }
  return currentLongest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (!Array.isArray(wordsArr)) {
    return false;
  }
  return wordsArr.includes(word);
  //
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (!Array.isArray(wordsArr) || wordsArr.length === 0) {
    return false;
  }
  var hasDuplicate = false;
  for (var i = 0; i < wordsArr.length; i++) {
    hasDuplicate = false;
    for (var j = i + 1; j < wordsArr.length; j++) {
      if (wordsArr[i] === wordsArr[j]) {
        hasDuplicate = true;
      }
    }
    if (!hasDuplicate) {
      return wordsArr[i];
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (
    typeof personObj !== 'object' ||
    Array.isArray(personObj) ||
    !personObj.firstName ||
    !personObj.lastName
  ) {
    return false;
  }
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (!Array.isArray(matrix) || !matrix.length) {
    return false;
  }
  var currMax = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
      if (currMax < matrix[i][j]) {
        currMax = matrix[i][j];
      }
    }
  }
  return currMax;
}
