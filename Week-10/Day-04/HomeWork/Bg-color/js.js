let btn = document.createElement('button');
btn.innerHTML = 'Change Color';
let body = document.querySelector('body');
body.appendChild(btn);

let colors = ['red', 'blue', 'orange', 'green']
let i = 0
body.style.backgroundColor = colors[i]
btn.addEventListener('click', () => {
    body.style.backgroundColor = colors[i]
    i++
    if (i == colors.length) {
        i = 0
    }
})