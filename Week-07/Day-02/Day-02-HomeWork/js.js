/* 1)Verilmiş sözü əks istiqamətə çevirmək.
Məsələn: veb => bev */
/* const reverse = (str) =>{
    let start = str.length - 1
    let result = ''
    for(let i = start; i >= 0; i--){
        result += str[i]
    }
    return result
}

console.log(reverse('veb')) */
/* 
2)Reqemlerden ibaret verilmis array-in en boyuk reqemini tapib, diger butun reqemleri onunla evezlemek
meselen: [12, 10, 3] => [12, 12, 12]
    [10, 3, 29, 15] => [29, 29, 29, 29] */

/* const change = (arr, num) => {
    for(let i =0 ; i < arr.length; i++){
        arr[i]=num
    }
    return arr
}

let arr = [10, 3, 29, 15]
let max = 0
for (let i =0; i < arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}

console.log(change(arr,max)) */

/*5) Reqemlerden ibaret verilmis array-in icinde axtarilan reqemin 2 defe olmasini yoxlamaq. true ve ya false qaytarmaq
meselen: [53, 90, 30, 21, 30] axtar 30 => true
    [53, 90, 21, 30] axtar 30 => false */
/* 
let arr = [53, 90, 30, 21]
let find = 30;
let count = 0;
let result = ''
for (let i = 0; i < arr.length; i++){
    if (arr[i] == find){
        count++
    }
    if(count == 2){
        result = true
    }
    else{
        result = false
    }
    
}
 */

/* 12)Verilmiş sözdəki qoşa yazılmış hərfləri yazmaq

Məsələn: abbas => b, bass => s, abbas teyyarede => yb */

/* let word = 'abbas teyyarede'
let result = ''
for(let i = 0; i < word.length; i++){
    if(word[i] == word[i+1]){
        result += word[i]
    }
}
console.log(result) */

/* 15) Verilmiş array-in verilmiş rəqəmini verilmiş rəqəmlə dəyişdirmək.

Məsələn: [3,10,2,51,4, 643, 4, 11], 4, 222 => [3,10,2,51,222, 643, 222, 11]
 */

/* let arr = [3,10,2,51,4, 643, 4, 11];
let index = 4;
let change = 222;
for(let i = 0; i < arr.length; i++){
    if(arr[i] == index){
        arr[i] = change
    }
}
console.log(arr) */


/* 10)Verilmiş 2 array-ın rəqəmlərin hər ikisində olub-olmadığını yoxlamaq.
Məsələn: [12, 10, 3] və [10, 3, 29, 15] => false
[10, 3, 29, 15] və [15, 10, 3, 29] => true 
*/
/*
16) Verilmiş iki sözdən, birindən digərini yaratmaq olarmı deyə yoxlamaq. Olarsa true, əks halda false göstərsin.
Məsələn: lotto, otlot => true ||| pul, upl => true ||| salam, lasas => false
*/

/* const include = (string, letter) => {
    for(let i = 0; i < string.length; i++){
        if(letter === string[i]){
            return true
        }
    }
    return false
}
let word = 'salam';
let find = 'lasas';

const check = (word,find) => {
    for(let i = 0; i < word.length; i++){
        if(!include(find,word[i])){
            return false
        }
    }
    return true
}

console.log(check(word,find)) */

/* 
17) Verilmiş iki array-ın ən az bir ortaq (common) ədədin olmasını yoxlamaq. Varsa həmin ədədi(ədədləri) göstərmək. Yoxdursa false göstərmək.
Məsələn: [3,10,2,5], [11, 50,2,51] => 2 ||| [3,10,2,5], [11,50,2,3] => 2, 3 ||| [3,10,2], [11,50,3] => false
*/
/* let arr = [3,10,2]
let arr1 = [11,50,5]
let result = ''
let isFound = true
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr1.length; j++){
        if(arr[i] == arr1[j]){
            result += arr[i] + ','
        }
    }
} */

/* 
Напишите программу на JavaScript для замены каждого символа в данной строке на следующий за ним символ в алфавите.
*/
/* let str = 'lotto';
let str1 = 'otlot';
console.log(str.split("").sort().join(""));
console.log(str1.split("").sort().join(""));
 */