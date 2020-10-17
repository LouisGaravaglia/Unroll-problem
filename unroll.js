function unroll(squareArray) {
    const output = [];
    const firstValues = [];
    const targetLength = squareArray[0].length * squareArray[0].length;
    let i = 0;
    let start = 0;
    let end = squareArray.length - 1;
    while (output.length < targetLength) {
        for (let j = i; j < squareArray.length; j++) {
            if (j === start) {
                let splicedArr = squareArray[j].splice(0);
                output.push(...splicedArr);
            } else if (j === end) {
                let splicedArr = squareArray[j].reverse().splice(0);
                output.push(...splicedArr);
            } else {
                let popped = squareArray[j].pop();
                let shifted = squareArray[j].shift();
                if (popped !== undefined) output.push(popped);
                if (shifted !== undefined) firstValues.push(shifted);
            }
        }
        firstValues.reverse();
        let splicedFirstValues = firstValues.splice(0);
        output.push(...splicedFirstValues);
        i++;
        start++;
        end--;
    }
    return output;
}

module.exports = unroll;

// const square = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
//   ];

//   const square2 = [
//     [1, 2, 3, 4, 5, 6, 7],
//     [8, 9, 10, 11, 12, 13, 14],
//     [15, 16, 17, 18, 19, 20, 21],
//     [22, 23, 24, 25, 26, 27, 28],
//     [29, 30, 31, 32, 33, 34, 35],
//     [36, 37, 38, 39, 40, 41, 42],
//     [43, 44, 45, 46, 47, 48, 49]
//   ];



//   unroll(square2)

//   For the square example, unroll should return [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10].