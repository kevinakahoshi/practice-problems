

function countOccurences(wordArray, word){
  var wordCount = 0;
  for (var wordArrayIndex = 0; wordArrayIndex < wordArray.length; wordArrayIndex++) {
    if (wordArray[wordArrayIndex] === word) {
      wordCount++;
    }
  }
  return wordCount;
}

function wordLengths(numberOfLetters){
  var numbersArray = [];
  for (var numberOfLettersIndex = 0; numberOfLettersIndex < numberOfLetters.length; numberOfLettersIndex++) {
    numbersArray.push(numberOfLetters[numberOfLettersIndex].length);
  }
  return numbersArray;
}

function getMinMaxMean(numbersArray){
  for (var numbersArrayIndex = 0, sum = 0; numbersArrayIndex < numbersArray.length; numbersArrayIndex++) {
    sum = sum + numbersArray[numbersArrayIndex];
  }

  var result = sum / numbersArray.length;

  var mathObj = {
    'min': Math.min.apply(null, numbersArray),
    'max': Math.max.apply(null, numbersArray),
    'mean': Math.ceil(result)
  }
  return mathObj;
}

function findMode(modeArray){
  debugger;
  var counts = {}; // Count the number of occurrences here
  var compare = 0; // Compare using the stored value
  var mostFrequent; // Store the most frequent item

  for (var modeArrayIndex = 0; modeArrayIndex < modeArray.length; modeArrayIndex++) {
    var value = modeArray[modeArrayIndex];
    if (counts[value] === undefined) { // If counts[value] doesn't exist, this sets the value to 1
      counts[value] = 1;
    } else {
      counts[value]++; // If counts[value] does exist, increment by 1
    }

    if (counts[value] > compare) { // counts[value] > 0 for the first time
      compare = counts[value]; // Compare to counts[value]
      mostFrequent = modeArray[modeArrayIndex]; // Most frequent value
    }
  }
  return mostFrequent;
}
