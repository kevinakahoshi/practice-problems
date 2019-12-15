

function getPath(stringPath){
  var pathArray = stringPath.split('/');
  return pathArray;
}

//http://localhost:8000/happy/go/lucky/file.html

//protocol: 'http',
//host: 'localhost',
//port: 8000,
//path: '/happy/go/lucky',
//file: 'file.html'

function getPathParts(url){
  // var parser = document.createElement('a');
  // var urlObject = {}, queries, split, i;
  // parser.href = url;
  const pathPartsObject = {
    protocol: null,
    host: null,
    port: null,
    path: null,
    file: null
  }

  const choppedUrl = url.split(':').join(' ').split('//').join(' ').split('  ').join(' ');
  const pathSlashIndex = choppedUrl.indexOf('/');
  const fileSlashIndex = choppedUrl.lastIndexOf('/');
  const newUrlString = choppedUrl.slice(0, pathSlashIndex) + ' ' + choppedUrl.slice(pathSlashIndex + 1, fileSlashIndex) + ' ' + choppedUrl.slice(fileSlashIndex + 1, choppedUrl.length);
  const newChop = newUrlString.split(' ');
  pathPartsObject.protocol = newChop[0];
  pathPartsObject.host = newChop[1];
  pathPartsObject.port = parseInt(newChop[2]);
  pathPartsObject.path = newChop[3];
  pathPartsObject.file = newChop[4];

  return pathPartsObject;
}

function getCapitalCount(stringArray){
  var capitalArray = [];
  for (var stringArrayIndex = 0; stringArrayIndex < stringArray.length; stringArrayIndex++) {
    if (stringArray[stringArrayIndex][0] === stringArray[stringArrayIndex][0].toUpperCase()) {
      capitalArray.push(stringArray[stringArrayIndex][0]);
    }
  }
  return capitalArray.length
}

function correctCalcChecker(numbersArray){
  var returnArray = [];
  for (var calcLoopIndex = 0; calcLoopIndex < numbersArray.length; calcLoopIndex++) {
    var resultOfMath = null;
    switch (numbersArray[calcLoopIndex].op) {
      case '+':
        resultOfMath = numbersArray[calcLoopIndex].num1 + numbersArray[calcLoopIndex].num2;
        break;
      case '-':
        resultOfMath = numbersArray[calcLoopIndex].num1 - numbersArray[calcLoopIndex].num2;
        break;
      case '*':
        resultOfMath = numbersArray[calcLoopIndex].num1 * numbersArray[calcLoopIndex].num2;
        break;
      case '/':
        resultOfMath = numbersArray[calcLoopIndex].num1 / numbersArray[calcLoopIndex].num2;
        break;
    }
    if (resultOfMath === numbersArray[calcLoopIndex].result) {
      returnArray.push(numbersArray[calcLoopIndex]);
    }
  }
  return returnArray;
}
