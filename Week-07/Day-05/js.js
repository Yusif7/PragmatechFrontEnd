/* replace */

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
            if(stop < (str.length-stop)){
                result = repalcePart(0,str,stop) + find
            }
            else if(stop > (str.length-stop)){
                result = find + repalcePart(i,str,str.length)
            }
            else if(stop == (str.length-stop)){
                result = repalcePart(0,str,stop) + find + repalcePart(stop,str,str.length)
            }
        }
    }
    return result
}


console.log(repalce(str,find,2))

