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

//DAY 2

// This is awkward... I had a challenge planned for today, but I kept the computer open while I went to water my plants and came back to chaos on the screen. Not to worry, though! I've figured out what happened and we'll fix it today, ready to get back to our main decoding functions tomorrow.

// It turns out that a cat snuck in the house and decided to do some typing while I was away from my desk. Lucky break though, somehow the last key the cat managed to type was a lowercase 'c', and it also somehow managed to be the only lowercase 'c' the cat typed.

// If we remove everything up to and including that first 'c' we'll be at a great starting point! Go ahead and scrap all that cat scratch from the string below.

let day2Str = "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

function catScratched(str){
    let indx = str.indexOf('c')
    return str.slice(indx +1)
}
console.log(catScratched(day2Str))


let day2Part2 = "ux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"

// Done it? Awesome. Next, it's just a simple matter of undoing what happens when a preschooler dumps a bucket of LEGO blocks on the keyboard. Kids, amiright? You'll want to remove all the instances of the word 'Eek!' in the remaining string please (case sensitive, of course).
function legos(str){
    let removed = str.split('Eek!')
    return removed.join('')
}

console.log(legos(day2Part2))


// Oh, I also forgot that I accidentally reversed the whole string too. Flip it back around after you've dealt with the 'Eek!'s, if you will.
let newStr = legos(day2Part2)


function reverse(str){
    return str.split('').reverse().join('')
}
// It should be looking a lot better now. I left the instructions for what to do now at the start of the remaining string. Do what it says and save the answer somewhere safe for tomorrow's challenge - it's key info.

let reversed = reverse(newStr)

let day2NearFinal = ["Split this string up on *lowrcas* 'V'. Th first charactr in ach substring bsids this first on is what you nd to rmmbr for tomorrow's tas. ", "S.A-#IYbSiQS5Sn@tqCcG;+:^myl%CJcWzUZ;", "pZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+y0x-#Kci LGcoOz3XKA)SAZ/j>T3sT=~Vs 6=B_Yi~@5~Gn)Q?Q7zI4yqfgXTsdi9ga43?w^oC~KMqw8i02WHHm%-0QdTBJum%@R_?,dJ 2t5QmgZRN8xW$fQ@G>tub)p1YjX()dpD3ru1(Q<8m?", "aotN<SqFz-7z8fDWj7s|=UR*:/CYLzj*?K:uCUmhASg8;H^/%<HU%>=hhPpLPdb|fBAM", "cA=)#4HH=Q^4nVHx^w,T<11M~RQ.iI7X?lbtc d35csP&1X2z87NF^w691a4_xu", "A=)#4HH=Q^4nVHx^w,T<11M~RQ.iI7X?lbtc d35csP&1X2z87NF^w691a4_xu"]

let day2Final = reversed.split('v')

// ["Split this string up on *lowercase* 'V'. The first…s what you need to remember for tomorrow's task. ", 'S.A-#IYbSEkiQS5Sn@tq!CcG;+:^myl%CJcWzUZ;', 'pZQP*nH1KA*GRFI+B/xHR:><%&4.zf*2+Ey0x-#Kci LGcoOz3…,dJk 2t5QmgZRN8xW$fQ@Ge>tub)Ep1YjX()dpD3ru1(Q<8m?', 'aotN<SqFz-7z8fDWj7s|=UR*E:/CYLzj*?K:uCUmhkASg8;H^/%<HU%>=hhPpLPdb|fBAM', 'cA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu', 'eA=)#4HH=Q^4nVHx^w,!T<11M~RQ.iI7Xk?lbtc d35csP&k1Xk2zk87NF^w691a4_xu']

console.log(day2Final)



//DAY 3

let keys = 'Space'


// Yesterday you should have come up with a few specific characters that we'll need today. Let's refer to those as our key characters.

// We need to create a function that will replace any instances of any of the key characters in a given string with an empty space (' '). See below for an example with an example set of key characters.

// Remember to keep your code somewhere safe, as you'll need it to decrypt this week's message!

// example key characters -> 'A','_','K','E','Y','!'

let example = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
// // implement key replacement function
// ' you could think this is hard to read before replacing the key characters'

function keyReplace(str){
    let split = str.split('')
    for(let i =0; i<split.length; i++){
        if(keys.includes(split[i])){
            split[i] = ' '
        }
    }
    return split.join('')
}


//DAY 4


//Today's challenge is minor to give you all a bit of a break halfway through the challenge week, but there are a couple of side quests I'm going to throw out for those with extra time on their hands.

// So far we've swapped out calculator characters, cleaned up after a cat and a preschooler, and placed some spaces. Today is simple! Given a string, reverse it. Any details like whitespace, letter casing, or punctuation should be preserved and flipped along with the rest of the string. For example:


// COPY
// "   The white space at the beginning of this string doesn't match the whitespace at the end. "
// // reverse it
// " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "

function reverse(str){
    return str.split('').reverse().join('')
}

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