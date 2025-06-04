function TwoSum(nums: number[]): number[] {
    let sumOfFirstPart = 0;
    let sumOfSecondPart = 0;

    nums.forEach((num, index) => {
        if (index % 2 === 0) {
            sumOfFirstPart += num;
        } else {
            sumOfSecondPart += num;
        }
    });

    return [sumOfFirstPart, sumOfSecondPart];
}

console.log(TwoSum([1, 2, 3, 4, 5])); // Expected: [9, 6]