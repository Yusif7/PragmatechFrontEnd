/*
Tapşırıq 1:
        Verilmiş ədədin faktorialını hesablayan proqram yazın:
        Example: Size verilir 6 => Cavab: 720
*/
    
/*  let n = 6; 
    let count = 0 // Variable for break condition
    let result = 1; 
    while(count < n){
        result *= (n-count)
        count++
        
        // 1)count=0 - 1*(6-0) = 6
        // 2)count=1 - 6*(6-1) = 30 
        // 3)count=2 - 30*(6-2) = 120 
        // 4)count=3 - 120*(6-3) = 360 
        // 5)count=4 - 360*(6-4) = 720
        // 6)count=5 - 720*(6-5) = 720
        
    }
    console.log(result) */



/*
Tapşırıq 2:
        Ilk 10 ededin Fibonaççi sırasını düzəldən proqram yazın:
        Example: 0 1 1 2 3 5 8 13 21 34
*/
    
    // Fo = 0, F1 = 1, Fn = Fn-1 + Fn-2
/*     let previous = 0;
    let next = 1;
    let i = 1;
    while(i < 9){
        next = previous + next; // Fn+1 = Fn-1 + Fn+1
        previous = next - previous // Fn-1 = Fn+1 - Fn-1
        i++
        console.log(next)
        // next = 0 + 1 = 1
        // prev = 1 - 0 = 1
        // next = 1 + 1 = 2
        // prev = 2 - 1 = 1
        // next = 1 + 2 = 3
        // prev = 3 - 1 = 2
        // next = 2 + 3 = 5
        // prev = 5 - 2 = 3
        // next = 3 + 5 = 8
        // prev = 8 - 3 = 5
        // next = 8 + 5 = 13
        // prev = 13 - 5 = 8
        // next = 13 + 8 = 21
        // prev = 21 - 8 = 13
        // next = 21 + 13 = 34
    } */

/*      // Fo = 0, F1 = 1, Fn = Fn-1 + Fn-2 n >=2
    let a = 1
    let b = 1
    for(let i = 2; i < 9; i ++){
        let result = a + b;
        a = b;
        b = result;
        console.log(result)
    } */



/*
Tapşırıq 4:
        Size mueyyen bir aralig verilir o araligda sade ededleri console-a cixaran proqram
        yazin
        Example: Başlanğıc deyer - 1,Bitis deyeri - 50 
        1 ile 50 arasindaki sade ededler: 2,3,5,7,11,13,...,47 
        Bu sekilde olmalidir 
*/
/* let start = 1;
let end = 50;
for (let i = 0; i <= end; i++){
    if (i%2 != 0){
        console.log(i)
    }
} */


/*
Tapşırıq 5:
        Size 2 dene melumat verilir 1)Size bir cumle verilir,2)Size bir soz verilir.
        Siz sozun cumlede istirak edib etmediyini tapmalisiniz ve hemcinin eger o soz
        cumlede istirak edibse nece defe istirak etdiyinin sayini tapan proqram yazin
        Example: 'Welcome to w3schools.w3schools.com' verilen cumle budur
        Verilen soz ise: w3schools
        Cavab=> True-count is 2
*/
/* let sentence = 'Welcome to w3schools.w3schools.com';
let word = 'w3schools';
let len = word.length
let result = '';
for (let i = 0; i < sentence.length; i = i +len){
    if (sentence[i] == '.' || sentence[i] == ' '){
        
    }
    
    console.log(result)
} */

/* let string = 'Welcome to w3schools.w3schools.com'
console.log(string.split('w3schools').length - 1) */

/*
Tapşırıq 6:
        Size soz verilir ve o sozde kicik herfleri boyuk herfe boyuk herfleri ise kicik 
        herfe cevirmek teleb olunur
        Example: 'SaLam' Cavab=> sAlAM
*/

/* let word = 'Salam';
let result = ''
let result1 = ''
for (let i = 0; i < word.length; i ++){
    if(word[i] == word[i].toLocaleLowerCase())
    {
        result += word[i].toLocaleUpperCase()
    }
    else if(word[i] == word[i].toLocaleUpperCase()){
        result1 = word[i].toLocaleLowerCase()
    }
}
console.log(result1 + result)
 */
/*
Tapşırıq 7:
        Size bir eded verilir o ededin reqemleri cemini tapan proqram yazin
        Example: 2343 => 2+3+4+3=12
*/
/* let num = 2343;
let strNum = String(num)
let result = 0;
for (let i = 0; i < strNum.length; i++){
    result += Number(strNum[i])
}
console.log(result) */


/*
Tapşırıq 8:
    Fesillere gore her fesilde hansi aylar oldugunu ekrana cixaran proqram yazin
    Example:
    1-Qiş,2-Yay,3-Payız,4-Yaz(Switch-case ile bu shekilde yaza bilersiniz)
    eger 2 daxil edilerse, Console.log('Iyun,Iyul,Avqust') bu şəkildə yazılmalıdır
*/
