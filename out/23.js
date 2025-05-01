"use strict";
function swapCharacters(text) {
    if (text.length < 1) {
        return;
    }
    const firstChar = text[0];
    const lastChar = text[text.length - 1];
    return lastChar + text.slice(1, -1) + firstChar;
}
console.log(swapCharacters("hello")); // "oellh"
