const counter = document.querySelector('#counter');
const som = document.querySelector('.som');
const sub = document.querySelector('.sub');

let count = 0;
som.addEventListener('click', () =>{
    count++;
    counter.innerHTML = count;
});

sub.addEventListener('click', () =>{
    count--
    counter.innerHTML = count;
});