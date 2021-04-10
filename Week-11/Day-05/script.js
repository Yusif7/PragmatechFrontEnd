let container = document.querySelector('.container');
let resultText = document.querySelector('h1')
let winner = false;
container.addEventListener('mouseover', (e) => {
    if (e.target.getAttribute('data-filter') == 'start') {
        container.addEventListener('mouseover', (ev) => {
            if (ev.target.getAttribute('data-filter') == 'middle') {
                container.addEventListener('mouseout', (event) => {
                    if (event.target.getAttribute('data-filter') == 'end') {
                        winner = true;
                        checkWinner(winner, resultText)
                    }
                })
            }
        })
    }
})


const checkWinner = (elem, text) => {
    if (elem == false) {
        text.innerText = 'You lose..Try again';
        return 0
    } else {
        text.innerText = 'You win!!!'
    }
}