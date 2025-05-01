function sortAlphabetically(text: string): string {
    const sortedText = text.split('').sort().join('');
    return sortedText;
}

console.log(sortAlphabetically("TypeScript")); // Output: "STceipprty"