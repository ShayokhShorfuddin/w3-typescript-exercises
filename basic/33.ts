function isIncluded(min: number, max: number, target: number): boolean {
    if (min <= target && target <= max) {
        return true;
    }

    return false;
}

function areInRange(num1: number, num2: number) {
    if ((isIncluded(40, 60, num1) && isIncluded(40, 60, num2)) ||
        (isIncluded(70, 100, num1) && isIncluded(70, 100, num2))) {
        return true;
    }

    return false;
}

console.log(areInRange(47, 59)); // true
console.log(areInRange(73, 88)); // true