

function populateRecords(testArray){
  let testArea = $('#testArea');
  let testOutput = $('<div>').addClass('testOutput');
  let transactionRecord = $('<div>').addClass('transactionRecord');
  let transactionType = $('<div>').addClass('transactionType').text('TYPE');
  let transactionLocation = $('<div>').addClass('transactionLocation').text('SOURCE');
  let transactionAmount = $('<div>').addClass('transactionAmount').text('AMOUNT');
  transactionRecord.append(transactionType, transactionLocation, transactionAmount);
  testOutput.append(transactionRecord);
  testArea.append(testOutput);
  let returnObject = {
    'charge': 0,
    'cash advance': 0
  };
  for (let recordIndex = 0; recordIndex < testArray.length; recordIndex++) {
    if (testArray[recordIndex].type === 'charge') {
      returnObject['charge'] += parseFloat(testArray[recordIndex].amount);
    } else if (testArray[recordIndex].type === 'cash advance') {
      returnObject['cash advance'] += parseFloat(testArray[recordIndex].amount);
    }
    transactionRecord = $('<div>').addClass('transactionRecord');
    transactionType = $('<div>').addClass('transactionType').text(testArray[recordIndex].type);
    transactionLocation = $('<div>').addClass('transactionLocation').text(testArray[recordIndex].source);
    transactionAmount = $('<div>').addClass('transactionAmount').text(testArray[recordIndex].amount);
    transactionRecord.append(transactionType, transactionLocation, transactionAmount);
    testOutput.append(transactionRecord);
    testArea.append(testOutput);
  }
  return returnObject;
}
