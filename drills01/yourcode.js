function sumArray(numbersArray){
	var sum = null;
	for (var sumOfArrayIndex = 0; sumOfArrayIndex < numbersArray.length; sumOfArrayIndex++) {
		sum = sum + numbersArray[sumOfArrayIndex];
	}
	return sum;
}

function fitWithinVal(specialValArray, value){
	var underValueArray = [];
	var sum = null;
	for (var specialValArrayIndex = 0; specialValArrayIndex < specialValArray.length; specialValArrayIndex++) {
		if (specialValArray[specialValArrayIndex] + sum < value) {
			underValueArray.push(specialValArray[specialValArrayIndex]);
			sum = sum + specialValArray[specialValArrayIndex];
		}
	}
	return underValueArray;
}

function getAllNamesShorterThan(namesArray, nameLength){
	var shortenedNameList = [];
	for (var namesArrayIndex = 0; namesArrayIndex < namesArray.length; namesArrayIndex++) {
		if (namesArray[namesArrayIndex].length < nameLength) {
			shortenedNameList.push(namesArray[namesArrayIndex]);
		}
	}
	return shortenedNameList;
}

function makeLabel(personObject){
	var greeting = personObject.greeting;
	var givenName = personObject.givenName;
	var familyName = personObject.familyName;
	var streetNumber = personObject['home address'].streetNumber;
	var streetName = personObject['home address'].streetName;
	var city = personObject['home address'].city;
	var state = personObject['home address'].state;
	var zip = personObject['home address'].zip;
	var sentence = greeting + ' ' + givenName + ' ' + familyName + '\n' + streetNumber + ' ' + streetName + '\n' + city + ', ' + state + ' ' + zip;
	return sentence;
}
