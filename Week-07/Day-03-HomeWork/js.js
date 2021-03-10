/* 1) Substr */

/* const substr = (start,str, end = str.length) => {
    let result = ''
    for (let i = start; i < end; i++){
        result += str[i]
    }
    return result
}
console.log(substr(1, 'javascript',4)) */

/* <li>Slice (array, string)</li>


/* const slice = (start,str,end = str.length) => {
    if(start > str.length || end > str.length){
        console.log('Melumat sehf daxil olunub...')
        break
    }
    if(start < 0 && end < 0){
        start = str.length - (start*(-1));
        end = str.length - (end*(-1))
    }
    else if(start < 0 && end > 0){
        start = str.length - (start*(-1));
    }
    else if(start > 0 && and < 0){
        end = str.length - (end*(-1))
    }

    let result = ''
    for(let i = start; i < end; i++){
        result += str[i]
    }
    return result
}
console.log(slice(-2,'javascript',-5)) */

/* 4) IndexOf */
/* const indexOf = (start,string, find) => {
    let k = 0
    let result = ''
    for(let i =start ; i < start + find.length; i++){
        if(find[k++] !== string[i]){ //eger beraber deyilse devamini axtarmasin false qaytarib cixsin funksiyadan
            return false
        }   
    }
    return true
}

const find = (string, find) => {
    for(let i = 0; i < string.length; i++){
        if(string[i] === find[0]){
            if(indexOf(i,string,find)){
                return i;
            }
        }
    }
    return false
}
console.log(find('our big nationascriptlitu justyfy old juice javascript', 'script')) */

/* 6) Concat */
/* const concat = (main,str = '', str1 = '', str2 = '') => {
    main += str+str1+str2;
    return main
}
console.log(concat('javascript' + 'python' + 'java'))
 */

/* 7) Trim */
// Ortadaki bosluguda silir
/* let str = ' Javas cript '
let space = ' '
let result = ''
for (let i = 0; i < str.length; i++){
    if(str[i] != space || (str[i-1] != space && str[i+1] != space)){
        result += str[i]
    }
}
console.log(result) */

/* 8) toString */
/* const toString = (num) =>{
    let result = ''
    result += num
    return result
}

console.log(toString(25)) */
/* 9) Pop */
/* let array = ['j','a','v','a','s','c','r','i','p','t'];
const pop = (array) => {
    let res = ''
    for (let i = 0; i < array.length-1; i++){
        res += array[i]
    }
    array.length = []
    for(let i =0; i < res.length; i++){
        array[i] = res[i]
    }
    return array
}
console.log(pop(array)) */

/* 10) Push */
/* let arr = [1,2,5,3,4,6]
let len = (arr.length-1)+1
const push = (array, elem) => {
    for (let i = 0; i < array.length; i++){
        array[len] = elem
    }
    return array
}
console.log(push(arr,14)) */


/* 16) Join */
/* let array = [1,2,3,4,5,6]
const join  = (array, sep=',') => {
    let result = ''
    for (let i = 0; i < array.length; i++){
        if (i == array.length-1){
            result += array[i]
            break
        }
        result += array[i] + sep
    }
    return result
}

console.log(join(array)) */

/* 11) Shift */
/* 12) Unshift */