
function maxOperations(binaryString: string): number {
    const ASCII_ZERO = 48;
    let countOnes = binaryString.codePointAt(0) - ASCII_ZERO;
    let maxOperations = 0;

    for (let i = 1; i < binaryString.length; ++i) {
        countOnes += binaryString.codePointAt(i) - ASCII_ZERO;
        maxOperations += binaryString[i - 1] > binaryString[i] ? countOnes : 0;
    }
    return maxOperations;
};
