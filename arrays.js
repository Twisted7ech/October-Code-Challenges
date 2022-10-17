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


//DAY 9

let myArray = ['abc', 'xyz', 1, 2, 'Hey!']

// // call move left function with 'xyz' and myArray as arguments
// console.log(myArray)   // ['xyz', 'abc', 1, 2, 'Hey!']

// // call move left function again, same arguments
// // Note that 'xyz' is already as far left as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 2, 'Hey!'] no change

// // call move right function this time, with 2 and myArray as arguments
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2]

// // call move right function again, same arguments
// // Note that 2 is already as far right as it can go
// console.log(myArray) // ['xyz', 'abc', 1, 'Hey!', 2] no change

function moveLeft(arr, target){
    let location = arr.indexOf(target)
    if(location > 0){
        [arr[location -1], arr[location]] = [arr[location], arr[location -1]]
    }
    return arr
}

function moveRight(arr, target){
    let location = arr.indexOf(target)
    if(location < arr.length - 1){
        [arr[location +1], arr[location]] = [arr[location], arr[location +1]]
    }
    return arr
}

//DAY 10

// Today's challenge is a bit of a tangent, but I think it's pretty powerful. It's inspired by my favorite Codewars kata ever, Moving Zeros To The End. This is my favorite kata because the first time I did it, my approach was so convoluted compared to the top-voted solution, which was a thing of beautiful simplicity. I think the moment I saw that solution something clicked for me and I realized the power of the built-in Javascript methods.

// Today I'd like you to write a function that takes in a given array of strings and move any entries containing the letter 'a' to the front, and then move any entries that have over 3 characters to the back. Please preserve the order of things while you do this!

// Example:

myArr = ['hi', 'hello', 'howdy', 'hola', 'hej', 'hallo', 'heyyy']
// move things around
// => ['hola', 'hallo', 'hi', 'hej', 'hello', 'howdy', 'heyyy']


function reorderArr(arr){
    indexA = []
    index3Plus = []
    rest = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes('a')){
            indexA.push(arr[i])
        }else if(arr[i].length > 3){
            index3Plus.push(arr[i])
        }else {
            rest.push(arr[i])
        }
    }
    return indexA.concat(rest).concat(index3Plus)
}


//DAY 11

// Imagine, if you will, an array with length X, with each of its entries having X number of primitives as their entries. Now imagine it arranged as a grid.

// // for the less imaginative among us :) 
// [[0,1,2],[3,4,5],[6,7,8]]

// // as a grid
// [
// [0,1,2],
// [3,4,5],
// [6,7,8]
// ]
// Still with me? I hope so! Today I need your help moving some things around again. I'm always rearranging.

// Please write twin functions that each take in a given value that will only appear once within a given array of a similar structure to the one described above, which will either move that value up one row or down one row in the array, keeping its same horizontal position. It will essentially swap places with whatever was where it needed to be. Just like in Day 2, don't do anything if the given value is already as high or low as it can get.

// Oh, and go ahead and mutate the given array. We're livin' on the wild side!

// Examples:


// COPY

// COPY
let myGrid = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

// // call move up function with 'h' and myGrid
// console.log(myGrid) = [['a', 'b', 'c'], ['d', 'h', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move up function again, same arguments
// // Note that 'h' is already as far up as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'f'], ['g', 'e', 'i']]

// // call move down function this time, with 'f' and myGrid as arguments
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]

// // call move down function again, same arguments
// // Note that 'f' is already as far down as it can go
// console.log(myGrid) = [['a', 'h', 'c'], ['d', 'b', 'i'], ['g', 'e', 'f']]
// Good luck, see you tomorrow!

function moveUp(arr, target){
    let grid = arr.length
    let loc
    let swap
    for(let i = 1; i < grid; i++){
        if(arr[0].includes(target)){
            return arr
        }else if(arr[i].includes(target)){
            loc = arr[i].indexOf(target)
            swap = arr[i-1][loc]
            arr[i-1][loc] = target
            arr[i][loc] = swap
            return arr
        }
    }
    return arr
}


function moveDown(arr, target){
    let grid = arr.length
    let loc
    let swap
    for(let i = 0; i < grid; i++){
        if(arr[grid-1].includes(target)){
            return arr
        }else if(arr[i].includes(target)){
            loc = arr[i].indexOf(target)
            swap = arr[i+1][loc]
            arr[i+1][loc] = target
            arr[i][loc] = swap
            return arr
        }
    }
    return arr
}


//Day 12

// Today your challenge is 2-parts: first, the DIY, and then the 'store-bought'.

// Please create a function that will take in an array like we've been working with all week (X-inner arrays of X-primitive values each) and shuffle it up in place. Do your best to have a thorough, random shuffle in a single call of your function.
// Don't move on to part 2 until you've done part 1!



function shuffle(arr, grid){
    let row = Math.floor(Math.random() * grid)
    let item = Math.floor(Math.random() * grid)
    let choice = Math.ceil(Math.random() * 4)
    let target = arr[row][item]
        if(choice === 1){
            moveUp(arr, target)
        }else if(choice === 2){
            moveDown(arr, target)
        }else if(choice === 3){
            moveLeft(arr[row], target)
        }else if(choice === 4){
            moveRight(arr[row], target)
        }
}

function shuffleLoop(arr){
    let grid = arr.length
    let repeat = Math.ceil(Math.random() * grid * grid * grid)
     for(let i = repeat; i > 0; i--){
        shuffle(arr, grid)
    }
    console.table(arr)
}

// You're probably feeling pretty good about your shuffle function and I'm betting it's amazing. How long did it take? Your second task today is to google how to shuffle a 2D array and read about why some approaches are better than others. Find a shuffle method that you like. How does it compare in speed, randomness, and thoroughness to yours?
// My goal with this challenge is to hopefully show you that often finding a method or other code online is not only OK, but a time-saver and sometimes better than what you could've done yourself! If you walk away with that knowledge, I'm a happy camper.


//Day 13

// This week has only 6 days of challenges, and this is day 6. Ready to mix it up and put those array functions to good use? I hope so!

// Today you'll be plugging in your functions to a skeleton react project to create a sliding puzzle game. Remember those things? I've added comments to the project Codepen, but before you click over there let's go over some key tasks and notes.

// Here is the Codepen for the project: https://codepen.io/blawblawLaw/pen/xxjMNrN

// You'll see 3 files: html, css, and js already over there. Please do the following:

// Fork the Codepen if it didn't automatically
// Add a link to your Github or Twitter to the footer in the html file (I know Codepen outside links don't work, but humor me)
// Insert your daily functions where noted in the js file
// Note that they need specific names and parameters
// Remember to insert any noted code from the comment within the functions
// Play your game! Are there bugs? No worries, debug away
// This is my first time having people blind-build functions to plug into a project, so if you get stuck feel free to reach out! It could be that I need to modify the instructions.

// I want to point out that I did call it a skeleton project because it is! Feel free to make it your own and add styles or content. Personally, I want to investigate sprites and try that out for the individual tiles so that I can easily use any square image and have a grid size selector.

// Share your forked pen with me @huntoberTweets! I'd love to see what you do with it!


