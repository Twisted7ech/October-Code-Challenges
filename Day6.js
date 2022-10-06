

//DAY 6

// Write a function that, when given a non-empty string, and positive integer X, removes every Xth character from the string. Counting should begin from the first element in the string and should continue in that pattern until the end of the string.

// // For the string below and 4
// "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
// // remove decoy strings
// "This is Halloween! This is Halloween!"

// // For the string below and 5
// "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
// // remove decoy strings and preach 🙌
// "The Bachelor is a terrible television show."

function removeNth(str, x){
    let split = str.split('')
    let result = split.filter((e, i) => ((i + 1) % x) != 0)
    return result.join('')
}

const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"

let step2 = fixTheMixUp(encryptedMsg)

let step3 = keyReplace(step2)

let step4 = reverse(step3)

let step5 = removeNth(step4, 3)

// step5 = 'sfmglyvi 1 DVVP WLDM. #100wVEHedv tl tvg!!'
