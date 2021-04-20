let yellow = document.querySelector('#yellow');
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let item = document.querySelectorAll('a');
let all = document.querySelector('#all');

const filter = (elem, item) => {
    elem.addEventListener('click', () => {
        for (let i = 0; i < 20; i++) {
            item[i].style.display = 'none';
        }
        for (let i = 0; i < 20; i++) {
            if (item[i].getAttribute('class') == elem.getAttribute('id')) {
                item[i].style.display = 'block';
            }
        }
        for (let i = 0; i < 20; i++) {
            if (item[i].getAttribute('id') == elem.getAttribute('id')) {
                item[i].style.display = 'block';
            }
        }
    })
}



filter(yellow, item);
filter(red, item);
filter(green, item);
filter(all, item)