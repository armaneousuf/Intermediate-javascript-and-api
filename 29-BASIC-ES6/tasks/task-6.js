function getBiggestNumberInArrays(numbers1, numbers2) {
    let biggestNumber = -Infinity; 

    for (const number of numbers1) {
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    for (const number of numbers2) {
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    return biggestNumber;

}

console.log(getBiggestNumberInArrays([7, 2, 9], [15, 28, 42]));
