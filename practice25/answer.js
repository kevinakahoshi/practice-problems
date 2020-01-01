function addArrays(array1, array2) {
  const outputArray = [];

  for (let index = 0; index < array1.length; index++) {
    outputArray.push(array1[index] + array2[index]);
  }

  return outputArray;
}
