'use strict'
let button = document.querySelector('.start-button');

let greeting = document.querySelector('.greeting');

let arrow = document.querySelector('.arrow');

let greetStyle = getComputedStyle(greeting);

let bodyRect = document.body.getBoundingClientRect();

let projectsWindow = document.querySelector('.main-window');

let back = document.querySelector('.back');

let projects = document.querySelectorAll('.project');

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
            button.style.top = '-50%';
            button.style.transition = '0.8s';
            button.style.width = window.innerHeight*2 + 'px';
            // button.style.borderRadius = '0';
            button.classList.add('clicked');
        },110);
        setTimeout(()=>{
            greeting.style.display = 'none';
            button.style.opacity = '0';
            projectsWindow.style.opacity = '1';
            projectsWindow.style.pointerEvents = 'auto';
            back.style.backgroundColor = '#56a5bf';
            setTimeout(()=>{
                button.style.display = 'none';
            },850);
        },850);
    }
});


for (let i = 0; i < projects.length; i++) {
    if (projects.length % 3 == 1) {
        projects[projects.length - 1].style.width = '802px';
        projects[projects.length - 1].style.height = '600px';
    }
}

// greeting.style.display = 'block';
// button.classList.remove('clicked');
// button.style.top = (parseInt(greetStyle.height) + greeting.getBoundingClientRect().top - bodyRect.top + 30) + 'px';
// button.style.transition = '0';
// console.log(button.classList);
// arrow.style.transition = '0.3s';
// setTimeout(()=>{
//     arrow.style.opacity = '1';
// },850);