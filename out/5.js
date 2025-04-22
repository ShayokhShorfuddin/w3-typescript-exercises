"use strict";
function rotateText() {
    let text = "w3resource "; // Extra space at the end for proper visual effect
    // Rotate the text every 100ms
    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        console.log(text);
    }, 100);
}
rotateText();
