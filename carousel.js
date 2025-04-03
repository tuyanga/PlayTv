document.addEventListener('DOMContentLoaded', () => {

const dotsContainer = document.querySelector('.carousel-dots');
let currentIndex = 0;
let intervalId = null;

const totalSlides = 5;

function createDots() {

    dotsContainer.innerHTML = '';
    for(let i = 0; i < totalSlides; i++){

        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.index = i;
        if (i === 0) {
            dot.classList.add('active');
        }
        
        dot.addEventListener('click', () => {
            UpdateDots(i);
            resetInterval();
        })

        dotsContainer.appendChild(dot);
    }
}

function UpdateDots(index){
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot,i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });

    currentIndex = index;
}

function nextSlide(){
    const nextIndex = (currentIndex + 1) % totalSlides;
    UpdateDots(nextIndex)
}   

function startInterval(){
    stopInterval();
    intervalId = setInterval(nextSlide, 5000);
}

function stopInterval(){
    clearInterval(intervalId);
    intervalId =null;
}

function resetInterval(){
    stopInterval();
    startInterval();
}

if (totalSlides > 0){
    createDots();
    UpdateDots(0);
} else {
    console.warn("NO Slides!")
}




});