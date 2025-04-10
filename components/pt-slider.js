const sliderData = [
    {
        title: "Didi",
        category: "Инээдмийн",
        duration: 110,
        poster: "posters/DidiHBO_vertical.jpg"
    },
    {
        title: "Амьдрах Сайхан",
        category: "Драм",
        duration: 120,
        poster: "posters/AmidrahSaihanS01_vertical.jpg"
    },
    {
        title: "Махан Бөмбөг",
        category: "Анимейшн",
        duration: 90,
        poster: "posters/CloudyWithAChanceOfMeatballs_vertical.jpg"
    },
    {
        title: "DespicableMe 4",
        category: "Анимейшн",
        duration: 100,
        poster: "posters/DespicableMe4HBO_vertical.jpg"
    },
    {
        title: "KungFu Panda 4",
        category: "Анимейшн",
        duration: 115,
        poster: "posters/KungfuPanda4HBO_vertical.jpg"
    },
    {
        title: "Өв Залгамжлагч",
        category: "Инээдмийн",
        duration: 120,
        poster: "posters/OvZalgamchlagchS01_verticalnotag.jpg"
    },
    {
        title: "Ratatouille",
        category: "Анимейшн",
        duration: 130,
        poster: "posters/Ratatouille_vertical.jpg"
    },
    {
        title: "Skyscraper",
        category: "Адал явдалт",
        duration: 105,
        poster: "posters/Skyscraper_vertical.jpg"
    },
    {
        title: "Zura",
        category: "Адал явдалт",
        duration: 125,
        poster: "posters/ztsuram_vertical.jpg"
    },
];

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

    render() {

        this.innerHTML = 
        `
            <div class="movie-card">
                <div class="card-content-container">
                    <button class="btn-add-card"><i class="fas fa-plus"></i></button>
                    <div class="card-content">
                        <h4 class="card-title">Movie Name</h4>
                        <span class="card-description">
                            <h6>Төрөл</h6>
                            <h6>120 мин</h6>
                        </span>
                    </div>
                </div>
            </div>
        `
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define("pt-movie-card", MovieCard);

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
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
                      <pt-movie-card></pt-movie-card>
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



