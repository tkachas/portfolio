'use strict'
let button = document.querySelector('.start-button');

let greeting = document.querySelector('.greeting');

let arrow = document.querySelector('.arrow');

let greetStyle = getComputedStyle(greeting);

let bodyRect = document.body.getBoundingClientRect();

button.style.top = (parseInt(greetStyle.height) + greeting.getBoundingClientRect().top - bodyRect.top + 30) + 'px';
button.style.left = 'auto';

if (!button.classList.contains('clicked')) {
    window.addEventListener('resize', ()=>{
        button.style.transition = 'all 0s ease 0s';
        button.style.top = (parseInt(greetStyle.height) + greeting.getBoundingClientRect().top - bodyRect.top + 30) + 'px';
    });
}

button.addEventListener('click', ()=>{
    if (!button.classList.contains('clicked')) {
        arrow.style.transition = '0.3s';
        arrow.style.opacity = '0';
        setTimeout(()=>{
            button.style.top = '0';
            button.style.transition = '0.8s';
            button.classList.add('clicked');
        },110);
        setTimeout(()=>{
            greeting.style.display = 'none';
            button.style.opacity = '0';
            setTimeout(()=>{
                button.style.display = 'none';
            },850);
        },850);
    }
});

// greeting.style.display = 'block';
// button.classList.remove('clicked');
// button.style.top = (parseInt(greetStyle.height) + greeting.getBoundingClientRect().top - bodyRect.top + 30) + 'px';
// button.style.transition = '0';
// console.log(button.classList);
// arrow.style.transition = '0.3s';
// setTimeout(()=>{
//     arrow.style.opacity = '1';
// },850);