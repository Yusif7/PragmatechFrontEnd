const addEvent = (selector, event, func) => {
    const elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, func)
    }

    return elements;
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


let isEnter = false;
let level = 0;
const container = document.querySelector('.container');
const messageBlock = document.querySelector('#message');

const setMessages = (winOrLose) => {
    const messages = [{
            "text": ["Such a loser", "Alinmadi reis", "bextini bir daha sina"],
            "btn": "Try again",
            "heading": "Fail!!!"
        },
        {
            "text": ["You're great", "You are a Ejdaha", "Amazing", "Halaldi"],
            "btn": "Go to next level",
            "heading": "Won!!!"
        }
    ];

    winOrLose = Number(winOrLose);

    const messageHeading = messageBlock.querySelector('h1');
    const messageText = messageBlock.querySelector('h2');
    const messageButtons = messageBlock.querySelectorAll('button');


    messageBlock.classList.remove('d-none');
    container.classList.add('d-none');

    messageHeading.innerText = messages[winOrLose].heading;
    messageText.innerText = messages[winOrLose].text[random(0, messages[winOrLose].text.length - 1)];
    messageButtons[0].innerText = messages[winOrLose].btn;
}


const goToLevels = (level) => {
    const gameBoard = document.querySelector('#js-over');
    console.log(level)
    const levelOptions = [{
            height: '50px',
            width: '50%',
            bgColor: 'white'
        },
        {
            height: '30px',
            width: '70%',
            bgColor: 'white'
        },
        {
            height: '20px',
            width: '80%',
            bgColor: 'transparent'
        }
    ];

    if (level >= levelOptions.length) {
        alert('oyun bitdi');
        goToLevels(0);
    } else {

        gameBoard.style.height = levelOptions[level].height;

        const gameBoardDivs = gameBoard.querySelectorAll('div');
        gameBoardDivs[1].style.width = levelOptions[level].width;
        gameBoardDivs[1].style.backgroundColor = levelOptions[level].bgColor;
    }
}

// init
//goToLevels(level);


addEvent('.bg-red', 'mouseenter', e => {
    isEnter = true;
});


// for lose
addEvent('#js-over', 'mouseleave', e => {
    if (isEnter) {
        isEnter = false;
        setMessages(isEnter);
    }
});


// for win
addEvent('.bg-blue', 'mouseenter', e => {
    if (isEnter) {
        setMessages(isEnter);
        isEnter = false;
    }
});


// next level
addEvent('#message button:first-child', 'click', () => {
    messageBlock.classList.add('d-none');
    container.classList.remove('d-none');
    goToLevels(++level);
});