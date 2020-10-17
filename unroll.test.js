const unroll = require("./unroll");
const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const square2 = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42],
  [43, 44, 45, 46, 47, 48, 49]
];

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];



describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("works with number arrays", function () {
    expect(unroll(square2)).toEqual([
      1,  2,  3,  4,  5,  6,  7, 14, 21, 28, 35,
     42, 49, 48, 47, 46, 45, 44, 43, 36, 29, 22,
     15,  8,  9, 10, 11, 12, 13, 20, 27, 34, 41,
     40, 39, 38, 37, 30, 23, 16, 17, 18, 19, 26,
     33, 32, 31, 24, 25
   ]);
   expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  })

  it("works with letter arrays", function () {
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  })

});
