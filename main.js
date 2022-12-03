const utils = require('./utils.js');

let mat1 = [
    [1,2,3],
    [2,3,4],
    [3,3,3]

]

let mat2 = [
    [2,3,4],
    [4,5,6],
    [5,5,5]
]
let text = "   This is my assignment  ";

console.log(utils.matrixProduct(mat1,mat2));
console.log(utils.matrixSum(mat1,mat2));
console.log(utils.sumofrows(mat1));
console.log(utils.countWords(text));
console.log(utils.trim(text));
