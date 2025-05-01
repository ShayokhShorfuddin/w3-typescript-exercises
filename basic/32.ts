function closestNumberToHundred(num1: number, num2: number) {
    const diff1 = Math.abs(100 - num1);
    const diff2 = Math.abs(100 - num2);

    if (diff1 < diff2) {
        return num1;
    }

    return num2;
}

console.log(closestNumberToHundred(26, 89)); // 89