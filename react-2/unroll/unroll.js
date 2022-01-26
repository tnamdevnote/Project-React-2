const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

const  unroll = (squareArray) => {
    const unrolledArr = [];

    while (squareArray.length !== 0) {
        // Grab the top row
        unrolledArr.push(...squareArray.shift());

        // Grab the last column in remaining rows.
        unrolledArr.push(...squareArray.map(row => row.pop()));

        // Grab the bottom row in reverse order
        unrolledArr.push(...squareArray.pop().reverse());

        // Grab the first column in remaining rows from bottom up.
        unrolledArr.push(...squareArray.map(row => row.shift()).reverse())
    };

    return unrolledArr;
}

module.exports = unroll;
