
//DAY 7

let zyx = 'zyxwvutsrqponmlkjihgfedcba'
let ZYX = 'ZYXWVUTSRQPONMLKJIHGFEDCBA'

function finalStep(str){
    abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    zyx = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
    ZYX = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
    let result = []
    let split = str.split('')
    for(let i = 0; i < split.length; i++){
        if(abc.includes(split[i])){
            let pos = abc.indexOf(split[i])
            result.push(ZYX[pos])
        }else if(ABC.includes(split[i])){
            let pos = ABC.indexOf(split[i])
            result.push(zyx[pos])
        }else{
            result.push(split[i])
        }
    }
    return result.join('')
}

let finalAnswer = finalStep(step5)