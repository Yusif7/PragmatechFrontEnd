const playerCardGenerate = () => {
    let images = document.querySelector('.images');
    images.addEventListener('click', (e) => {
        let src = e.target.getAttribute('src'); //click
        let a = document.querySelector('.player-img'); //add
        a.setAttribute('src', src)
        if (a.getAttribute('src') == 'img/ножницы.png') {
            a.setAttribute('data-img', 1)
        } else if (a.getAttribute('src') == 'img/бумага.png') {
            a.setAttribute('data-img', 2)
        } else {
            a.setAttribute('data-img', 3)
        }
        computerCardGenerate()
        console.log(checkWinner())
    })
}


const computerCardGenerate = () => {
    let computerImages = [{
            name: 'paper',
            src: 'img/бумага.png'
        },
        {
            name: 'rock',
            src: 'img/камень.png'
        },
        {
            name: 'scissors',
            src: 'img/ножницы.png'
        }
    ];
    computerImages.sort(() => 0.5 - Math.random())
    let a = document.querySelector('.computer-img');
    setTimeout(() => {
        a.setAttribute('src', computerImages[1].src)
        if (a.getAttribute('src') == 'img/ножницы.png') {
            a.setAttribute('data-img', 1)
        } else if (a.getAttribute('src') == 'img/бумага.png') {
            a.setAttribute('data-img', 2)
        } else {
            a.setAttribute('data-img', 3)
        }
    }, 1000);
    return computerImages[1].src
}

const checkWinner = () => {
    let player = document.querySelector('.player-img').getAttribute('data-img');
    let computer = document.querySelector('.computer-img').getAttribute('data-img');
    document.querySelector('.result').innerText = '';
    if (
        (player == 1 && computer == 1) ||
        (player == 2 && computer == 2) ||
        (player == 3 && computer == 3)) {
        return 'Beraberlik'
    } else if (
        (player == 1 && computer == 2) ||
        (player == 2 && computer == 3) ||
        (player == 3 && computer == 1)
    ) {
        return 'Player is win';
    } else if (
        (player == 1 && computer == 3) ||
        (player == 2 && computer == 1) ||
        (player == 3 && computer == 2)
    ) {
        return 'Computer is win';
    }
}

playerCardGenerate()