const random = () => {
    return Math.floor(Math.random() * 4) + 1;
}

const randomColor = (elem) => {
    let rand = random();
    elem.style.backgroundColor = elem.getAttribute('data-color');
    elem.innerText = rand;
    return elem
}

const addColor = (array) => {
    for (let i = 0; i < array.length; i++) {
        randomColor(document.querySelector(`.${array[i]}`))
    }
}

const checkEndOfGame = (color) => {
    let count = 0;
    document.querySelector('.row').addEventListener('click', (e) => {
        if (e.target.getAttribute('data-color') == color) {
            let text = Number(e.target.innerText);
            text -= 1;
            e.target.innerText = text;
            if (text < 0) {
                e.target.innerText = '';
                e.target.style.backgroundColor = '';
                e.target.classList.add('finish');
                showResult(count)
            }
        }
    })
}

const showResult = (count) => {
    document.querySelectorAll('.block').forEach(e => {
        if (e.classList.contains('finish')) {
            count++
        }
        if (count == 4) {
            document.querySelector('h1').innerText = 'Butun xanalar temizlendi tebrikler!!!'
        }
    })
}

const play = () => {
    let colorArray = ['red', 'green', 'yellow', 'blue'];
    document.querySelector('span').addEventListener('click', () => {
        addColor(colorArray)
        for (let i = 0; i < colorArray.length; i++) {
            checkEndOfGame(colorArray[i])
        }
    })
}

play()