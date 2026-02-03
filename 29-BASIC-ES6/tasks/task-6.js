const getBiggestNumberInArrays = (number1, number2) => {
    let biggestNumber = -Infinity;

    for (const number of number1) {
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    for (const number of number2) {
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    return biggestNumber
}

console.log(getBiggestNumberInArrays([7, 2, 9], [15, 28, 42]));