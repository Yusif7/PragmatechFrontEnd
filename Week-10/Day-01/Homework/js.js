let button = document.querySelectorAll('button');
let p = document.querySelectorAll('p')
button.forEach(e => {

    e.addEventListener('click', () => {
        let next = e.nextElementSibling;
        p.forEach(ev => {
            ev.setAttribute('class', 'd-none')
        })
        if (next.classList.contains('d-none')) {
            next.classList.remove('d-none');
            next.classList.add('d-block')
        } else {
            next.classList.remove('d-block');
            next.classList.add('d-none')
        }
    })
})