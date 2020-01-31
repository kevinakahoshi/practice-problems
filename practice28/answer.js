function romanNumeralConversion(number) {
  // 2020 = MMXX
  let splitNumber = number.toString().split('');
  let romanDigit = '';

  if (splitNumber[3]) {
    const firstNumber = parseInt(splitNumber[0]);
    let firstRoman = '';
    for (let index = 0; index < firstNumber; index++) {
      firstRoman += 'M';
    }
    romanDigit += firstRoman;
  }

  if (splitNumber[2]) {
    const secondNumber = parseInt(splitNumber[1]);
    let secondRoman = '';
    if (secondNumber < 4 && secondNumber > 0) {
      for (let index = 0; index < secondNumber; index++) {
        secondRoman += 'C';
      }
    } else if (secondNumber === 4) {
      secondRoman += 'CD';
    } else if (secondNumber > 4 && secondNumber < 9) {
      let tempRoman = 'D';
      if (secondNumber > 5) {
        for (let index = 5; index < secondNumber; index++) {
          tempRoman += 'C';
        }
      }
      secondRoman += tempRoman;
    } else {
      secondRoman += 'CM';
    }
    romanDigit += secondRoman;
  }

  if (splitNumber[1]) {
    const thirdNumber = parseInt(splitNumber[2]);
    let thirdRoman = '';
    if (thirdNumber < 4 && thirdNumber > 0) {
      thirdRoman += 'XXX';
    } else if (thirdNumber === 4) {
      thirdRoman += 'XL';
    } else if (thirdNumber > 4 && thirdNumber < 9) {
      let tempRoman = 'L';
      for (let index = 5; index < thirdNumber; index++) {
        tempRoman += 'X';
      }
      thirdRoman += tempRoman;
    } else {
      thirdRoman += 'XC';
    }
    romanDigit += thirdRoman;
  }

  console.log(romanDigit);
}

romanNumeralConversion(3000);
