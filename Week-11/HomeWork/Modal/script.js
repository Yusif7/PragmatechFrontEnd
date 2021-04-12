let open = document.querySelector('#open');
let close = document.querySelector('span');
open.addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'block';
})

close.addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none';
})

document.querySelector('#modal').addEventListener('click', () => {
    document.querySelector('#modal').style.display = 'none';
})