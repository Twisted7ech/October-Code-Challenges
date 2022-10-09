
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