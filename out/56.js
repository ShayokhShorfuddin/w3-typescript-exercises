"use strict";
function commaFormat(num1, num2) {
    const divisionResult = num1 / num2;
    const resultString = divisionResult.toString();
    let formattedString = "";
    let leftSide = resultString;
    let hasFractionalPart = false;
    // In case of fractional results, extract the left side of the dot (.)
    if (resultString.includes('.')) {
        hasFractionalPart = true;
        leftSide = resultString.split('.')[0];
    }
    let skippedNumbers = 0;
    for (const char of leftSide.split('').reverse()) {
        if (skippedNumbers === 3) {
            formattedString = `,${formattedString}`;
            skippedNumbers = 0;
        }
        formattedString = char + formattedString;
        skippedNumbers++;
    }
    if (hasFractionalPart) {
        return formattedString + resultString.substring(resultString.indexOf('.'));
    }
    return formattedString;
}
console.log(commaFormat(1357135435, 4));
