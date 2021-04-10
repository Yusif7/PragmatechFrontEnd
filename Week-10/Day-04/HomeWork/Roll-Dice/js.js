const ShowNums = () => {
    let numbers = document.querySelector('.numbers');
    let brackets = document.querySelector('.brackets');
    let btn_add = document.querySelector('.btn-add');
    let reset = document.querySelector('.reset')
    let array = [];
    numbers.addEventListener('click', (e) => {
        for (let i = 3; i <= 9; i += 2) {
            if (RandomNums(e, i)) {
                let a = RandomNums(e, i);
                array.push(a);
                brackets.innerText = array;
            }
        }
    })
    btn_add.addEventListener('click', () => {
        array.push(Number(document.querySelector('.num').value));
        brackets.innerText = array;
    })

    reset.addEventListener('click', () => {
        array.length = [];
        brackets.innerText = '';
        document.querySelector('.sum').innerText = 0;
        document.querySelector('.num').value = 0;
    })
    return array
}

const RandomNums = (num, n) => {
    let random = 0
    if (num.target.innerText == n) {
        random = Math.floor(Math.random() * (n + 1));
    }
    return random
}

const checkResult = () => {
    let btn = document.querySelector('.btn');
    let sum = document.querySelector('.sum')
    let arr = ShowNums()
    let result = 0
    btn.addEventListener('click', () => {
        if (sum.innerText > 0) {
            result = 0
        }
        for (let i = 0; i < arr.length; i++) {
            result += arr[i]
        }
        sum.innerText = result;
    })

}

checkResult()