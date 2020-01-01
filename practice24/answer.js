function matrixAdd(array1, array2) {
  const outputArray = [];

  for (let outerIndex = 0; outerIndex < array1.length; outerIndex++) {
    const indexArray = [];
    for (let innerIndex = 0; innerIndex < array1[outerIndex].length; innerIndex++) {
      indexArray.push(array1[outerIndex][innerIndex] + array2[outerIndex][innerIndex]);
    }
    outputArray.push(indexArray);
  }

  return outputArray;
}
