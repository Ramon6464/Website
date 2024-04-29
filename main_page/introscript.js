let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let Span = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        
        Span.forEach((span, delay)=>{
            setTimeout(() => {
                span.classList.add('active');
            }, (delay+1) * 400)
        })

        setTimeout(() => {
            Span.forEach((span, delay)=>{
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (delay+1) * 400)
            })
        }, 1500)

        setTimeout(() => {
            intro.style.top = '-100vh';
            intro.style.opacity = '0';
        }, 2500);
    })
})

var prev = document.getElementById('prev');
var next = document.getElementById('next');
let index = 0;
prev.onclick = () => {
    const slides = document.getElementsByClassName('slides');
    const slider = document.getElementById('slider');
    const current = slider.getElementsByClassName('active');
    current[0].classList.remove('active');
    if(index == 0){
        index = slides.length - 1;
    }
    else{
        index--;
    }
    slides[index].classList.add("active");
}
next.onclick = () => {
    const slides = document.getElementsByClassName('slides');
    const slider = document.getElementById('slider');
    const current = slider.getElementsByClassName('active');
    current[0].classList.remove('active');
    if(index == (slides.length - 1)){
        index = 0;
    }
    else{
        index++;
    }
    slides[index].classList.add("active");
}

var work = document.getElementById('drop_list');
work.onclick = () =>{
    const drop = document.getElementById('work');
    drop.classList.add('active');
}
var quit = document.getElementById('quit');
quit.onclick = () => {
    const drop = document.getElementById('work');
    drop.classList.remove('active');
}