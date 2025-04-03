let position = 0;
const cardWidth = 15;
let visibleCards = 6;
let movieLength = 9;

function updateSliderpos(){
    const slider = document.getElementById('movieSlider');
    slider.style.transform = `translateX(-${position * cardWidth}rem)`;
}

document.addEventListener('DOMContentLoaded',() => {
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        const maxPosition = movieLength - visibleCards;
        position = Math.min(position + 3, maxPosition);
        updateSliderpos();
      });
      
      document.getElementById('prevBtn').addEventListener('click', () => {
        position = Math.max(position - 3, 0);
        updateSliderpos();
      });

});



