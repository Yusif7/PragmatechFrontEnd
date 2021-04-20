let move = 0;
let sliderLine = document.querySelector('.slider-line');

const moving = () => {
    sliderLine.style.transition = 'all 0.7s ease-in 0s';
    move += 804;
    if (move > 3216) {
        sliderLine.style.transition = 'none';
        move = 0;
    }
    sliderLine.style.left = -move + 'px';
}
document.querySelector('.next').addEventListener('click', () => {
    sliderLine.style.transition = 'all 0.7s ease-in 0s';
    move += 804;
    if (move > 3216) {
        sliderLine.style.transition = 'none';
        move = 0;
    }
    sliderLine.style.left = -move + 'px';
});

document.querySelector('.prev').addEventListener('click', () => {
    sliderLine.style.transition = 'all 0.7s ease-in 0s';
    move -= 804;
    if (move < 0) {
        sliderLine.style.transition = 'none';
        move = 3216;
    }
    sliderLine.style.left = -move + 'px';
});