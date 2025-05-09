function concatenateStrings(firstString: string, secondString: string): string {
    if (firstString.length === secondString.length) {
        return firstString + secondString;
    }

    if (firstString.length > secondString.length) {
        return firstString.substring(firstString.length - secondString.length) + secondString;
    }

    return firstString + secondString.substring(secondString.length - firstString.length);
}

console.log(concatenateStrings("Apple", "Banana!")); // Output: Applenana!
