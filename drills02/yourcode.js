

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
  const sortedArray = modeArray.sort();
  const tracker = {};

  for (let index = 0; index < modeArray.length; index++) {
    if (tracker[modeArray[index]] !== undefined) {
      tracker[modeArray[index]]++;
    } else {
      tracker[modeArray[index]] = 1;
    }
  }

  console.log(tracker);
}
