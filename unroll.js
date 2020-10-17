function unroll(input) {
    const output = [];
    const firstValues = [];
    const inputLength = input.length;
    const targetLength = input.length ** 2;
    let i = 0;
    let start = 0;
    let end = inputLength - 1;
    while (output.length < targetLength) {
        for (let j = i; j < inputLength; j++) {
            if (j === start) {
                let splicedArr = input[j].splice(0);
                output.push(...splicedArr);
            } else if (j === end) {
                let splicedArr = input[j].reverse().splice(0);
                output.push(...splicedArr);
            } else {
                let popped = input[j].pop();
                let shifted = input[j].shift();
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