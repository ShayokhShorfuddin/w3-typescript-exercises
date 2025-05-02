"use strict";
function checkSeparation(text) {
    const indexOfA = text.indexOf('a');
    const indexOfB = text.indexOf('b');
    if (indexOfB - indexOfA === 4) {
        return true;
    }
    return false;
}
console.log(checkSeparation("antibiotic")); // Output: true
console.log(checkSeparation("abcde")); // Output: false
