//  DAY 1

// This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

// Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

// Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

// '0' <-> 'O'      '5' <-> 'S'
// '1' <-> 'I'      '6' <-> 'G'
// '2' <-> 'Z'      '7' <-> 'L'
// '3' <-> 'E'      '8' <-> 'B'
// '4' <-> 'h'      '9' <-> 'q'


// "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
// // implement fix function -> 
// "PRO-TIP #498: IT'S NICE TO SAY HELLO."
let day1Str = "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 

function fixTheMixUp(str){
    let nums = '0123456789'
    let letters = 'OIZEhSGLBq'
    let split = str.split('')
    for(let i = 0; i< split.length; i++){
        if(nums.includes(split[i])){
            let indx = nums.indexOf(split[i])
            split[i] = letters[indx]
        }else if(letters.includes(split[i])){
            let indx = letters.indexOf(split[i])
            split[i] = nums[indx]
        }
    }
    return split.join('')
}

console.log(fixTheMixUp(day1Str))