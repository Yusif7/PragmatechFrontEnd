let count = 0;
document.querySelectorAll('button')[0].addEventListener('click', (e) => {
    e.preventDefault();
    let span = document.createElement('span');
    span.classList.add('adding-item');
    span.innerText = document.querySelectorAll('input')[0].value;
    document.querySelector('.add-grocery').appendChild(span);
    count++
    setTimeout(() => {
        document.querySelector('.add-header').style.display = 'block';
        document.querySelector('.add-header').innerText = `${count} item added`
    }, 100);
})

document.querySelectorAll('button')[1].addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.adding-item').forEach(e => {
        e.style.display = 'none'
    })
    setTimeout(() => {
        document.querySelector('.clear-header').style.display = 'block';
        document.querySelector('.clear-header').innerText = `${count} item deleted`;
    }, 100);
})