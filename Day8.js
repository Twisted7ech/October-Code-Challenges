//DAY 8

// Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

// Be of equal size
// Will each contain some number (X) arrays
// Each inner array will contain that same number (X) primitive elements
// string
// number
// bigint
// boolean
// undefined
// symbol
// null

// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// For example:


// COPY
// // each of these arrays have 3 nested arrays of 3 strings each 
const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]
const arr5 = [[0,0,0],['d','e','f'],['g','h','i']]
const arr6 = [[false,false,false],['d','e','f'],['g','h','i']]

// // if we were to use our function to compare all the possible pairs
// // ONLY arr1 vs arr2 would return true

// checkEquality(arr1, arr2) => true
// checkEquality(arr1, arr3) => false
// checkEquality(arr1, arr4) => false
// // etc.

function arrCompare(array1, array2){
    return array1.reduce((acc, c) => acc + c, "") === array2.reduce((acc, c) => acc + c, "")
}
