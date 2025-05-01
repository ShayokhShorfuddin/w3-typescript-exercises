"use strict";
function sortAlphabetically(text) {
    const sortedText = text.split('').sort().join('');
    return sortedText;
}
console.log(sortAlphabetically("TypeScript")); // Output: "STceipprty"
