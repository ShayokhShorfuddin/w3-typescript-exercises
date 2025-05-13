function removeFirstAndLastP(text: string) {
    let newText = "";

    if (text[0].toLowerCase() === "p") {
        newText = text.substring(1);
    }

    if (text[text.length - 1].toLowerCase() === "p") {
        newText = newText.substring(0, newText.length - 1);
    }

    if (newText !== "") {
        return newText;
    }

    return text;
}

console.log(removeFirstAndLastP("Pineapple")); // Output: ineapple