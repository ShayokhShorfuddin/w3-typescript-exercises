"use strict";
function isIncluded(min, max, target) {
    if (min <= target && target <= max) {
        return true;
    }
    return false;
}
function areInRange(num1, num2) {
    if ((isIncluded(40, 60, num1) && isIncluded(40, 60, num2)) ||
        (isIncluded(70, 100, num1) && isIncluded(70, 100, num2))) {
        return true;
    }
    return false;
}
console.log(areInRange(47, 59)); // true
console.log(areInRange(73, 88)); // true
