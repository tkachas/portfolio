'use strict'
let button = document.querySelector('.start-button');

let welcomeText = document.querySelector('.welcome');

let greeting = document.querySelector('.greeting');
let greetingContainer = document.querySelector('.container');

let dots = document.querySelectorAll('.dot');

// let arrow = document.querySelector('.arrow');

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

let animIteration = 2;
dotsAnim(animIteration); // Start of loading dots animation (recursive function);



setTimeout(()=>{
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.display = 'none';
    }
    if (!button.classList.contains('clicked')) {
        welcomeText.style.display = 'block';
        // arrow.style.transition = '0.3s';
        // arrow.style.opacity = '0';
        setTimeout(()=>{
            button.style.top = '-50%';
            button.style.transition = '1s';
            button.style.width = window.outerHeight*2 + 'px';
            button.style.height = window.outerHeight*2 + 'px';
            // button.style.borderRadius = '0';
            button.classList.add('clicked');
            button.style.backgroundColor = '#093357';
            welcomeText.style.opacity = '1';
            welcomeText.style.fontSize = '5rem';
        },110);
        setTimeout(()=>{
            button.style.transition = '1s';
            button.classList.remove('clicked');
            greeting.style.display = 'none';
            // projectsWindow.style.opacity = '1';
            // projectsWindow.style.pointerEvents = 'auto';
            button.style.width = '0px';
            button.style.height = '0px';
        },1050);
    }
},5000);


for (let i = 0; i < projects.length; i++) {
    if (projects.length % 3 == 1) {
        projects[projects.length - 1].style.width = '802px';
        projects[projects.length - 1].style.height = '600px';
    }
}

function dotsAnim(n) {
    if (n <= 0) {
        return 'done';
    }
    let dotAppearance = 630;
    for (let i = 0; i < dots.length; i++) {
        setTimeout(()=>{dots[i].style.opacity = 1},dotAppearance);
        dotAppearance += 630;
    }
    setTimeout(()=>{
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.opacity = 0;
        }
        console.log('ready');
        dotsAnim(n - 1);
    },dotAppearance);
    return;
}