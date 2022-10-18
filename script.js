//Day 17

// Today's challenge is to simplify the example function below based on what we've discussed today. I also challenge you to look at some recent functions you've written and apply these same principles to those!


// function myExampleFunction(arr) {
//     if (arr != null) {
//         if (arr.length !== 0) {
//             if (arr[0].length !== 0) {
//                 if (arr.length > 10) {
//                     arr.push('maximum')
//                 } else if (arr.length === 10) {
//                     arr.push('maximum')
//                 } else {
//                     if (arr[0] === 'must be maximum') {
//                         arr.push('failure')
//                     } else if (arr[0] === 'flexible') {
//                         arr.push('success')
//                     }
//                 }
//             }
//         }
//     }
//     return arr
// }


function myExampleFunction(arr) {
    if ((arr == null) || (arr.length === 0) || (arr[0].length === 0))  return arr
    
    if(arr.length >= 10) arr.push('maximum')
    
    if(arr[0] === 'must be maximum'){
        arr.push('failure')
    }else if(arr[0] === 'flexible'){
        arr.push('success')
    }
    return arr
}


//Day 18

// // What is even happening here?
// function fn1(s,x) {
//     return (Math.abs(s.charCodeAt(0) - s.charCodeAt(s.length-1)) === 0) 
//       ? 'Already there' 
//       : (Math.abs(s.charCodeAt(0) - s.charCodeAt(s.length-1)) <= x)
//       ? 'Not far off' 
//       : 'Too far'
//   }
  
  
//   // Oh, now I see
//   function differenceStartEndCharCodes( string, threshold ) {
//     const startCharCode = string.charCodeAt(0)
//     const endCharCode = string.charCodeAt(string.length-1)
//     const absoluteDiff = Math.abs(startCharCode-endCharCode)
  
//     if (absoluteDiff === 0) { return 'Already there' }
//     if (absoluteDiff <= threshold) { return 'Not far off' }
//     return 'Too far'
//   }
  
// One of the biggest benefits of DRY code is the ease of maintenance. Now that repeating processes are contained in a single function, updating or making changes to those processes is a matter of editing one function.




// Names Matter
// This one might have some naysayers, but I'm firmly planted on this hill and not giving it up. Names in your code matter. Naming things with generic characters of ambiguous abbreviations is doing a HUGE disservice to anyone reading that code now or in the future.

// Self-documenting code speaks for itself! You don't need to rely on comments scattered throughout a well-named, well-organized file. Anything you name, be that functions, parameters, props, variables, or files, should have a name that makes sense. Good names tell someone what happening without them having to ask or dig. Aim for human-readable names that someone new to your codebase could understand.

// Another important aspect of self-documenting code is avoiding overly complex one-line operations. Have you ever seen nested ternaries that made you cross-eyed, or layers of array indexing and method chaining that made you want to weep? Avoid that. Pull things apart.

// Take these two versions of the same function, one with useless, unhelpful naming, and one with thoughtful naming. Also, note that sometimes it makes sense to pull parts of logic out for clarity's sake:




// function comp1(a, b) {
//     const c = new Date()
//     const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
//     const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
//     const as = a.toDateString()
//     const bs = b.toDateString()
//     if (da * 2 <= db) {
//         return `If you thought ${as} was a long wait, wait until you see how long it is until ${bs}.`
//     } else if (da < db) {
//         return `Don't worry, ${bs} isn't too much farther away than ${as} in the scheme of things.`
//     } else if (da === db) {
//         return `They're the same number of days away!`
//     } else {
//         return `You know ${as} is closer, right?`
//     }
// }

// function comp2(a, b) {
//     const c = new Date()
//     const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
//     const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
//     const as = a.toDateString()
//     const bs = b.toDateString()
//     if (da < db) {
//         const x = Math.floor(db/da)
//         return `Looks like ${bs} is ${x} times farther away than ${as}.`
//     } else if (da === db) {
//         return `Same exact date there, mate.`
//     } else {
//         const x = Math.floor(da/db)
//         return `Looks like ${as} is ${x} times farther away than ${bs}.`
//     }
// }

// function tot(a, b) {
//     const c = new Date()
//     const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
//     const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
//     const as = a.toDateString()
//     const bs = b.toDateString()
//     const x = db-da
//     return `You have ${da} days left until ${as}, and ${db} days left until ${bs}. There are ${x} days between them.`
// }

// // feel free to plug these example dates into your functions
const dateA = new Date(2022,09,26)
const dateB = new Date(2022,11,25)


function comp1(a, b) {
    const c = new Date()
    const da = Math.ceil(Math.abs(c.getTime() - a.getTime()) / (1000*60*60*24))
    const db = Math.ceil(Math.abs(c.getTime() - b.getTime()) / (1000*60*60*24))
    const as = a.toDateString()
    const bs = b.toDateString()
    if (da * 2 <= db) {
        return `If you thought ${as} was a long wait, wait until you see how long it is until ${bs}.`
    } else if (da < db) {
        return `Don't worry, ${bs} isn't too much farther away than ${as} in the scheme of things.`
    } else if (da === db) {
        return `They're the same number of days away!`
    } else {
        return `You know ${as} is closer, right?`
    }
}
function compare2Dates(dateA, dateB){
    const c = new Date()
    const differenceA = Math.ceil(Math.abs(c.getTime() - dateA.getTime()) / (1000*60*60*24))
    const differenceB = Math.ceil(Math.abs(c.getTime() - dateB.getTime()) / (1000*60*60*24))
    const dateAstring = dateA.toDateString()
    const dateBstring = dateB.toDateString()
    return [differenceA,differenceB,dateAstring,dateBstring]
}

function compare2DatesReturnDifference(a, b) {
    let [difA, difB, aString, bString] = compare2Dates(a,b)
    if (difA < difB) {
        const x = Math.floor(difB/difA)
        return `Looks like ${bString} is ${x} times farther away than ${aString}.`
    } else if (difA === difB) {
        return `Same exact date there, mate.`
    } else {
        const x = Math.floor(difA/difB)
        return `Looks like ${aString} is ${x} times farther away than ${bString}.`
    }
}

function compare2DatesReturnDaysUntilEach(a, b) {
    let [difA, difB, aString, bString] = compare2Dates(a,b)
    const x = difB-difA
    return `You have ${difA} days left until ${aString}, and ${difB} days left until ${bString}. There are ${x} days between them.`
}