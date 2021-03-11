/* replace */
/* 
let str = 'javascript';
let find = 'IT';


const repalcePart = (start=0, str, end=str.length) => {
    let result = ''
    for(let i = start; i < start + Number(end); i++){
        if(str[i] === undefined){
            continue
        }
        result += str[i]
    }
    return result
}

const repalce = (str,find,stop) => {
    let result = ''
    for(let i = 0; i < str.length; i++){
        if (i === stop){
            if(stop <= (str.length-stop)){
                result = repalcePart(0,str,stop) + find
            }
            else if(stop > (str.length-stop)){
                result = find + repalcePart(i,str,str.length)
            }
        }
    }
    return result
}


console.log(repalce(str,find,2)) */


/*Splice */


/* let arr = [1,2,3,4,5]
const slice = (start,arr,end=arr.length) => {
    let result = ''
    for(let i = start; i < start + end; i++){
        if(arr[i] == undefined){
            continue
        }
        result += arr[i]
    }
    return result
}

const splice = (arr, elemIndex) => {
    let result = ''
    for(let i = 0; i < arr.length; i++){
        if (i == elemIndex){
            result = slice(0,arr,i) + elemIndex + slice(i,arr)
        }
    }
    arr.length = []
    for(let j = 0; j < result.length; j++){
        arr[j] = result[j]
    }
    return arr
}
console.log(splice(arr,2)) */


/* Split */
/* let str = "How are you doing today?";
let result = ''

const addElem = (str,elem) => {
    let array = []
    for(let i = 0; i < str.length; i++){
        array[i] = str[i]
        if(array[i] == elem){
            array[i] =','
        }
    }
    return array
}

const split = (str,elem) => {
    let array = []
    for(let i = 0; i < str.length; i++){
            if(elem == ''){
                if(i === str.length-1){
                    array[i] = str[i]
                    break
                }
                array[i] = str[i] + ','
            }
            if(str[i] == elem){
                array = addElem(str,elem)
            }
    }
    for(let j = 0; j < array.length; j++){
        result += array[j]
    }
    return array
}
console.log(split(str,'o')) */


/* Palindrome -> 121,131,141(Guzgu eksi ozune beraber ededlere palindrom ededler deyilir) Verilmis ededin polindrom eded olub olmadigini mueyyen eden proqram */
/* let num = 566;
const palindrome = (num) => {
    let str = String(num)
    for(let i = 0; i < str.length;i++){
        if(str.length == 3 && str[i-1] == str[i+1]){
            return true
        }
    }
    return false
}
console.log(palindrome(num)) */

/*  1-500 arasindaki palindrome ededleri console-a cixarmaq */
/* let result = '' 
for (let i = 100; i <= 500; i++){
    result = String(i)
    if(result[0] == result[2]){
        console.log(result)
    }
} */

/* Armstronq ededler=> 371=>3^3+7^3+1^3=27+343+1=371 (Armstronq ededler) //Verilmis ededin armstronq eded olub olmadigini mueyyen eden proqram */
let result = ''
const armstrong = (num) =>{
    let result = []
    str = String(num)
    for(let i = 0; i < str.length;i++){
        result[i] = str[i]
    }
    let numResult = 0
    for(let j = 0; j < result.length;j++){
        numResult += Number(result[j]**str.length)
    }
    if(numResult === num){
        return true
    }
    else{
        return false
    }
}

console.log(armstrong(154))