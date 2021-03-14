const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const push = (arr, elem) => {
    arr[arr.length] = elem;
    return arr
}

const indexOf = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (elem == arr[i]) {
            return i
        }
    }
    return -1
}

const turn = () => {
    let max = 5
    let rand = random(1, max)

    if (indexOf(out, rand) === -1) { //Esli rand deyerinde index icinde yoxdursa onu elave out icine
        return push(out, rand)
    }
    if (out.length === max) { // Eger uzunlugu teyin etdiyimiz gedere beraberdirse array ozunu qaytar ve bitir
        return out
    }
    return turn(); // yuxaridaki eger uzunlugu tam dolmuyubsa recursiya et
}

const getIntervalIndex = (num) => {
    if (num >= 1 && num <= 9) {
        return 0
    }
    if (num == 90) {
        return 8
    }
    for (let i = 9; i <= 79; i += 10) { // Her defe +10 edirik ki, lazim olan araliga dusek
        if (num >= i + 1 && num <= i + 10) {
            return (i + 1) / 10
        }
    }
}

//kartda eyni rəqəmlər ola bilməz 
const includesMulti = (arr, elem) => {
    let symbol = "#";
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr[i]
        for (let j = 0; j < arr1.length; j++) {
            if (elem == arr1[j]) {
                arr1[j] = symbol
                count++
                if (count == 5) {
                    return true
                }
            }
        }
        count = 0
    }
    return false
}

/* let a = [
    [1, '', 1, '', 1, 1, '', ''],
    ['', 1, 1, 1, '', 1, '', ''],
    [1, 1, 1, 1, '', '', '', '', '']
]
console.log(includesMulti(a, 1)) */


const includeSolo = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (elem == arr[i]) {
            return true
        }
    }
    return false
}


//TODO: bir kartda eyni index-də max 2 cərgə ola bilər


const getCard = () => {
    let card = [] // card daxilinde olan siralar
    let row = []
    let randArr = [] // rand deyerleri yigmaq ucun
    let emptyRow = [] // He defe sira yaradanda daxilinde reqemleri silmek ucun istifade olunur
    const repeated = []; // hansı index-də neçə dəfə rəqəm çıxıb 
    for (let i = 0; i < 9; i++) {
        push(emptyRow, "")
        push(repeated, 0); // [0,0,0,0,0,0,0,0] icini 0 larlar doldur
    }
    for (let j = 0; j < 3; j++) {
        row = [...emptyRow] // uc kart reqemlerle doldurmaq ucun her defe row yenilemek lazimdir,... iki array birlesdirmek ucun istifade olunur
        for (let i = 0; i < 5; i++) { // Doldurulan xanalarin sayi
            const rand = random(1, 90); // 1-90 arasi butun reqemler
            const numIndex = getIntervalIndex(rand); // meselen, 32 - 2-ci, 55 - 4-cu, 90 - 8-ci index
            if (includeSolo(randArr, rand)) {
                i--
                continue
            }
            // əgər çıxan daşın index-ində rəqəm varsa
            // və ya çıxan daşın index-ində 2 və daha çox təkrarlanma varsa
            // və ya (2-ci və yuxarı cərgədəyəmsə və index-də təkrar olunmayan rəqəm varsa və çıxan rəqəm təkrarlanmamış index-də deyilsə)
            // YENIDƏN TƏZƏ RƏQƏM ÇIXART
            if (typeof row[numIndex] === 'number' || repeated[numIndex] >= 2 ||
                (j > 0 && indexOf(repeated, 0) !== -1 && indexOf(repeated, 0) !== numIndex)) { // Eger random gelen reqem numberdirse yani array artiq o indexde reqem teyin olunubsa o zaman i-- ve yeniden loop qayit
                i--; // Eger arrayin index artiq dolubsa i-- dovr bitmesin ve 5 ede reqem tam dolsun 
                continue; // Dovr yenide qayit ki tezeden azaldilmis i devam etsin
            }
            push(randArr, rand)
            row[numIndex] = rand; // Cixan random reqemi teyin olunan index elave et
            repeated[numIndex]++;
        }
        push(card, row)
    }
    return card
}