function findFactors(numberToFactor) {
  const outputArray = [];

  let index = 0;
  while (index <= numberToFactor) {
    if (numberToFactor % index === 0) {
      outputArray.push(index);
    }
    index++;
  }

  return outputArray;
}
