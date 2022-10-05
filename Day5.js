
//DAY 5

// So, I may have bitten off a bit more than I can chew this week. Will you help me out?

// My friend has invented a 'Best Cat-Themed Pun of a TV Show Title Ever' award and I promised I'd help her with the submissions. The problem is, I didn't realize just how much help she would need whittling down the submissions to the finalists. Between work, family, and Huntober, I just don't have time to get the final list over to her. Can you help?

// Here is a comma-separated list of the submissions:


// let puns = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy,The Golden Purrs,Meowpardy,Mew Peter,Meownton Abbey,Pets and the Kitty,The Catbert Purrport,The Pawffice,Catlumbo,Fluffy the Meowpire Purrer,The Inbemewners,Paw & Order,The Pawnight Show,Furiends,Mewie,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek,The Purrlight Zone,The Meowre,The Rings of Meower,Mewphoria,La Casa de Pawpel,Rick & Meowty,PawndaVision,The Meowndalorian,How to Get Away with Meowder,Meowther Ted,Mewtopia,Mewster Rogers' Neighborhood"

let punstring = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
let puns = punstring.split(',')
// There are some very strict rules that the pun submissions had to follow. I need to know which of these cat puns made the cut. I promise tomorrow we'll get back to decoding our secret message, and coincidentally, I'm pretty sure the number of these puns that met the criteria will match a key sequence value we'll need tomorrow. Isn't that lucky?

// Here are the rules these submissions had to follow:
// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions)
// no whitespace beginning or end

let trimmed = puns.filter((entry) => (entry === entry.trim()))


// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped)
let noDog = trimmed.filter((entry) => (!entry.toLowerCase().includes('dog') && !entry.toLowerCase().includes('bone') && !entry.toLowerCase().includes('bark')))


// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation)
// length % 5 != 0
let noFives = noDog.filter((entry) => (entry.length % 5 != 0))

// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her)
// charCodeAt[0] + [1] % 2 != 0
let sumCode = noFives.filter((entry) => ((entry.charCodeAt(0) + entry.charCodeAt(entry.length-1)) % 2) != 0)

// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')
//math.ceil(length /2) +1
let filterE = sumCode.filter((entry) => entry[Math.ceil(entry.length/2)] != 'e')


// Must have an even number of lowercase letters (do not count punctuation or spaces as letters)
// lower % 2 = 0
// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict)
// upper >= 2
let abc = 'abcdefghijklmnopqrstuvwxyz'
let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'



let counts = function uppersAndLowers(arr){
    // let abc = 'abcdefghijklmnopqrstuvwxyz'
    // let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let uppers = 0
    let lowers = 0
    let result = []
    for(let i = 0; i < arr.length; i++){
        let title = arr[i]
        for(let j = 0; j < title.length; j++){
            if(abc.includes(title[j])){
                lowers += 1
            }else if(ABC.includes(title[j])){
                uppers += 1
            }
        }
        if(lowers % 2 == 0 && uppers >=2){
            result.push(title)
        }
        lowers = 0
        uppers = 0
    }
    return result
}
let count = counts(filterE)

// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?)
// ! include 'S'

let final = count.filter((title) => title.includes('S'))


// function rulesForPuns(str){
//     let acceptable = []
//     let split = str.split(',')
//     for(let i = 0; i < split.length; i++){
//         if(split[i] == split[i].trim()){
//             if((!split[i].toLowerCase().includes('dog')) && (!split[i].toLowerCase().includes('bark') && (!split[i].toLowerCase().includes('bone')))){
//                 if(split[i] % 5 != 0){
//                     if((split[i].charCodeAt(0) + split[i].charCodeAt(split[i].length-1)) % 2 != 0){
//                         let mid = Math.ceil(split[i].length / 2)
//                         if(split[i][mid] !== 'e'){
//                             let uppers = 0
//                             let lowers = 0
//                             let abc = 'abcdefghijklmnopqrstuvwxyz'
//                             let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//                             for(let j = 0; j < split[i].length; j++){
//                                 if(abc.includes(split[i][j])){
//                                     lowers +=1
//                                 }else if(ABC.includes(split[i][j])){
//                                     uppers +=1
//                                 }
//                             }
//                             if(lowers % 2 == 0 && uppers >= 2){
//                                 if(!split[i].includes('S')){
//                                     acceptable.push(split[i])
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return acceptable
// }
