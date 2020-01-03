function romanNumeralConversion(number) {
  // 2020 = MMXX
  const splitNumber = [];
  let mutatedNumber = number;
  let output = '';
  let counter = 0;
  let decrementor = Math.pow(10, mutatedNumber.toString().length - 1);

  if (mutatedNumber.toString().length < 2) {
    decrementor = 1;
  }

  while (decrementor <= mutatedNumber) {
    mutatedNumber -= decrementor;
    counter++;
  }

  splitNumber.push(decrementor * counter);
  counter = 0;

  console.log(splitNumber);
}

romanNumeralConversion(2020);
