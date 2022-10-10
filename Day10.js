
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