let visibleCards = 6;
const scrollStep = 3;

document.addEventListener('DOMContentLoaded',() => {

    const sections = document.querySelectorAll('.slide-container');
    const card = document.querySelector('.movie-card');
    const styles = window.getComputedStyle(card);
    const cardWidth = parseInt(styles.width,10);

    if (cardWidth < 220){
        visibleCards = 3;
    } else{ }

    console.log(visibleCards);

    sections.forEach(section => {

      const slider = section.querySelector('.movie-list-container');
      const nextBtn = section.querySelector('#nextBtn');
      const prevBtn = section.querySelector('#prevBtn');

      let position = 0;
      const movieLength = slider.children.length;

      function updateSliderpos() {
        slider.style.transform = `translateX(-${position * cardWidth}px)`;
      }

      nextBtn.addEventListener('click', () => {
        const maxPosition = movieLength - visibleCards;
        position = Math.min(position + scrollStep, maxPosition);
        updateSliderpos();
      });

      prevBtn.addEventListener('click', () => {
        position = Math.max(position - scrollStep, 0);
        updateSliderpos();
      });

    });

});

class MovieCard extends HTMLElement {
    constructor(){
        super();
    }


}

class MovieSlider extends HTMLElement {

  constructor(){
      super();
      this.title = 'Slider Title'; 
  }

  render() {
      this.innerHTML = 
      `   
          <div class="container slide-container">
              <div class="slide-title">${this.title}</div>
              <div class="slider-row-wrapper">
              <button class="slider-arrow prev-arrow" id="prevBtn"><</button>
                  <div class="movie-list-container">
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                      <div class="movie-card"></div>
                  </div>
              <button class="slider-arrow next-arrow" id="nextBtn">></button>
              </div>
          </div>
      `;
  }

  static get observedAttributes(){
      return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue){
      if (name === 'title' && oldValue !== newValue){
          this.title = newValue;
          this.render();
      }
  }

  connectedCallback(){
      const initialTitle = this.getAttribute('title')
      if (initialTitle) {
        this.title = initialTitle;
      }
      this.render();
  }
}

customElements.define("pt-slider",MovieSlider);



