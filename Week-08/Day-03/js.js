// 1) 2 eded verilir o ededlerin yerini deyisen proqram

// 2) 2 eded verilir o ededlerin yerini deyisen proqram

// a=15,b=35  (elave variable istifade etmeden bu ededlerin yerini deyismek)

// 3) INPUT: arr=[10,2,10,10,2,5,11]

// OUTPUT: {
//       10:3,
//      2:2,
//      5:1,
//      11:1
//     }

/* let c = 15;
let d = 35;
let temp = c
c = d;
d = temp

let a = 15;
let b = 35;
a = a + b // 50
b = a - b // 15
a = a - b // 35 */

let arr = [10, 2, 10, 10, 2, 5, 11]

const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

const check = (arr) => {
    let obj = { count: [], number: [] }
    let count = 1
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count++
            if (count > max) {
                max = count
                obj.number.push(arr[i])
                obj.count.push(max)
            }
        } else {
            count = 1
        }
    }
    return obj
}

let sorting = sort(arr)
console.log(check(sorting))