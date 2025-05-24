function arrayCreator(array1: number[], array2: number[]): number[] {
    // Since we are promised that both arrays will have exactly 3 items in them,
    // we can access the middle item using array[1].
    return [array1[1], array2[1]];
}

console.log(arrayCreator([1, 2, 3], [4, 5, 6])); // Output: [2, 5]