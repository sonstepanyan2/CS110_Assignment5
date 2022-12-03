//ex1
function matrixProduct (mat1, mat2) {
    let product = []
    if (mat1[0].length !== mat2.length){
    return(" can not count")
    }
    for (let rowmat1 = 0; rowmat1 < mat1.length; rowmat1++) {
    let newRow = []
    for (let colmat2 = 0; colmat2 < mat2[0].length; colmat2++) {
    let newPro= 0
    for (let i = 0; i < mat1[rowmat1].length; i++) {
    newPro += mat1[rowmat1][i] * mat2[i][colmat2]
    }
    newRow.push (newPro)
    }
    product.push (newRow)
    }
    return product
    }
    console.log(matrixProduct);
    
    //ex2

    function blankmatrix(matrix = []) {
        let newMat = [];
        for (let i = 0; i < matrix.length; i++) {
            newMat[i] = []
    }
    return newMat
    }
    
    
    function matrixSum(mat1, mat2) {
    if(mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
    console.log("can not count");
    return;
    } else {
    let C = blankmatrix(mat1) ;
    for ( let row = 0; row < mat1.length; row++) {
    for( let col = 0; col < mat1[0].length; col++) {
        C[row][col] =  mat1[row][col] + mat2[row][col];
    }
    }
        return C ;
    }
    }
    console.log(matrixSum);
    
    
    //ex3

    function sumofarr(mat1) {
        let suma = 0;
        for (let i = 0; i< mat1.length; i++) {
        suma += mat1[i];
        }
        return suma;
    }
        function sumofrows(matrix) {
        let sum = [];
        for(let i = 0; i < matrix.length; i++) {
        sum.push(sumofarr(matrix[i]));
        }
        return sum;
    }
    console.log(sumofrows);
    
    //ex4
    
    function countWords(str)
    {
        let result = 0;
        let is_word = false;
    
        for (let i=0; i<str.length; i++)
        {
    
    
            if (str[i]===' ') {
               if (is_word){
                result++;  
                is_word = false;
               }     
    
    
            }else{
                is_word = true; 
            }
    
        }
        if  (is_word)
            result++; 
        
        return result;
    }
    console.log(countWords);

//ex5

function trim(string){
        let nospace = " ";
        let i = 0
        for (i<string.length; string[i]===" "; i++) {
        }
        let a = string.length-1
        if(string[a]===" "){
        a--;
     }
        for(i; i<=a; i++){
            nospace = nospace + string[i]
        }
        return nospace
    }
    console.log(trim);
    
    
    
    
    
     module.exports = {
        matrixSum,
        matrixProduct,
        sumofrows,
        countWords,
         trim
    }
