

function removeClassFromElement(elementToTarget, classToRemove) {
  $(elementToTarget).removeClass(classToRemove);
}

function toggleClassOnElement(elementToTarget, classToToggle) {
  $(elementToTarget).toggleClass(classToToggle);
}

function hideElements(elementToTarget, removalType) {
  switch (removalType) {
    case 'hide':
      $(elementToTarget).hide();
      break;
    case 'removeChildren':
      $(elementToTarget + ' *').remove();
      break;
    case 'removeSelf':
      $(elementToTarget).remove();
      break;
  }
}

function addAttributeToElement(elementToTarget, elementAttribute, attributeValue) {
  $(elementToTarget).attr(elementAttribute, attributeValue);
}

function putPosInElement(elementToTarget) {
  var xPosition = $(elementToTarget)[0].offsetLeft;
  var yPosition = $(elementToTarget)[0].offsetTop;
  var returnObject = {
    'x': xPosition,
    'y': yPosition
  }
  $(elementToTarget).html(`x: ${xPosition}px` + `<br>` + `y: ${yPosition}px`);
  return returnObject;
}
