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

