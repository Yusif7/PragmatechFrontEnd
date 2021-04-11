let move = 0;
let sliderLine = document.querySelector('.slider-line');
document.querySelector('.next').addEventListener('click', () => {
    move += 804;
    if (move > 3216) {
        move = 0;
    }
    sliderLine.style.left = -move + 'px';
})

document.querySelector('.prev').addEventListener('click', () => {
    move -= 804;
    if (move < 0) {
        move = 3216;
    }
    sliderLine.style.left = -move + 'px';
})