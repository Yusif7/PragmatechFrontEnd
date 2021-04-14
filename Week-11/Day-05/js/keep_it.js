const addEvent = (selector, event, func) => {
    const elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener(event, func)
    }

    return elements;
}

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


let isEnter = false;
const container = document.querySelector('.container');

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

    const messageBlock = document.querySelector('#message');
    const messageHeading = messageBlock.querySelector('h1');
    const messageText = messageBlock.querySelector('h2');
    const messageButtons = messageBlock.querySelectorAll('button');


    messageBlock.classList.remove('d-none');
    container.classList.add('d-none');

    messageHeading.innerText = messages[winOrLose].heading;
    messageText.innerText = messages[winOrLose].text[random(0, messages[winOrLose].text.length - 1)];
    messageButtons[0].innerText = messages[winOrLose].btn;
}


addEvent('.bg-red', 'mouseenter', e => {
    isEnter = true;
});


addEvent('#js-over', 'mouseleave', e => {
    if (isEnter) {
        isEnter = false;
        setMessages(isEnter);
        nextLevel();
    }
});


addEvent('.bg-blue', 'mouseenter', e => {
    if (isEnter) {
        setMessages(isEnter);
        nextLevel();
        isEnter = false;
    }
});

const nextLevel = () => {
    let count = 0;
    document.querySelectorAll('button')[0].addEventListener('click', () => {
        if (document.querySelectorAll('button')[0].innerText == 'Go to next level') {
            count++
            document.querySelector('#message').classList.add('d-none');
            container.classList.remove('d-none');
            let height = document.querySelector('.main').offsetHeight / 1.2;
            let width = document.querySelector('.main').offsetWidth * 1.2;
            document.querySelector('.main').setAttribute('style', `height:${height}px; width:${width}px;`);
            if (count == 2) {
                document.querySelectorAll('button').forEach(e => {
                    e.style.display = 'none';
                    return 0;
                })
            }
        } else {
            document.querySelector('#message').classList.add('d-none');
            container.classList.remove('d-none');
        }
    })
}