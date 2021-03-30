// var elem = document.querySelector('#text');

// document.addEventListener('click', function() {
//     elem.innerHTML = 'Hello World';
// });



var city = document.querySelectorAll('.list-group-item'); //NodeList

//console.log(city);

for (var i = 0; i < city.length; i++) {
    city[i].addEventListener('click', function() {
        this.remove();
        if (this.children[0].classList.contains('fa-times')) {
            this.children[0].classList.remove('fa-times');
            this.children[0].classList.add('fa-check');
        } else {
            this.children[0].classList.remove('fa-check');
            this.children[0].classList.add('fa-times');
        }
    })
}

/* // NextElementSiblings
var nextElem = document.querySelector('#item1').nextElementSibling;

console.log(nextElem);
// NextElementSiblings

// PreviousElementSibling

var prevElem = document.querySelector('#item2').previousElementSibling;
console.log(prevElem); */

// PreviousElementSibling