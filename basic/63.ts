function extractMiddleThreeCharacters(text: string): string | undefined {
    const textLength = text.length;

    // Length must be equal or greater than 3
    if (textLength < 3) {
        return;
    }

    // If the length is 3 already characters, return the string
    if (textLength === 3) {
        return text;
    }

    // Offset is basically the number of characters that surround the middle characters
    // e.g. "abcdefg" => (ab) + cde + (fg) => offset = 4
    const offset = textLength - 3

    return text.substring(offset / 2, offset / 2 + 3);
}

console.log(extractMiddleThreeCharacters("abcdefg")); // cde