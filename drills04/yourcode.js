

function changeElements(classToTarget){
  var target = $(classToTarget);
  for (var loopIndex = 0; loopIndex < target.length; loopIndex++) {
    var theElement = target[loopIndex];
    var elementText = theElement.textContent;
    switch (elementText) {
      case 'one':
        $(theElement).text('1');
        break;
      case 'two':
        $(theElement).text('2');
        break;
      case 'three':
        $(theElement).text('3');
        break;
      case 'four':
        $(theElement).text('4');
        break;
      case 'five':
        $(theElement).text('5');
        break;
      case 'six':
        $(theElement).text('6');
        break;
      case 'seven':
        $(theElement).text('7');
        break;
      case 'eight':
        $(theElement).text('8');
        break;
      case 'nine':
        $(theElement).text('9');
        break;
      default:
        break;
    }
  }
}

function appendTextToElement(className, string) {
  var theElementClass = $(className);
  theElementClass.map(index => {
    var specificElement = $(theElementClass[index]);
    specificElement.text(specificElement.text() + string);
  });
}

function addClass(firstClass, secondClass) {
  var targetClass = $(firstClass);
  targetClass.addClass(secondClass);
  return targetClass.length;
}

function removeElements(targetElement) {
  var elementToRemove = $(targetElement);
  elementToRemove.remove();
}
