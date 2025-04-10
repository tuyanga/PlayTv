const carouselData = [
    {
      title: "Didi",
      description: "Нэгэн өсвөр насны хүү хичээл орохоос өмнө амжиж гэр бүлийнхэн нь зааж чадахгүй нэлээд хэдэн зүйлсийг сурахаар шийднэ. Жишээ нь: скейтбордоор гулгах, хэрхэн зөв сээтгэнэх гэх мэт.",
      image: "images/Didi__lookhorizontal.jpg"
    },
    {
      title: "Skyscraper",
      description: "Хонг Конгын хамгийн өндөр тэнгэр баганадсан барилгад гал гарлаа. Уг ослын бурууг барилгын хамгаалалтын ажилтан Вилл Сойерт тохохыг оролдоно.",
      image: "images/Skyscraper__lookhorizontal.jpg"
    },
    {
      title: "DespicableMe 4",
      description: "Энэ удаа Грү, Люси хоёр ам бүл нэмж, бяцхан дайсантай болохын зэрэгцээ зугтаж явахаас өөр аргагүй өстөн дайснуудтай болох нь тэр.",
      image: "images/DespicableMe4__lookhorizontal.jpg"
    }
  ];

    
class MovieCarousel extends HTMLElement {
        constructor(){
            super();
            this.currentIndex = 0;
            this.data = carouselData;
            this.intervalId = null;
            this.intervalDuration = 5000;
        }
    
        render(){
            this.innerHTML = 
            
            `<div class = "carousel-track" style="background-image: url(${this.image})">
                <div class = "carousel-overlay"></div>
                <div class="container carousel-content-container">
                    <div class="carousel-content">
                        <h1 class="movie-title">${this.title}</h1>
                        <div class="movie-description">
                            <p>${this.description}</p>
                        </div>
                        <div class="button-container">
                        <pt-play-btn></pt-play-btn>
                        <pt-add-btn></pt-add-btn>
                        </div>
                    </div>
                </div>
                <div class="carousel-dots"></div>
            </div>`;

            this.trackElement = this.querySelector('.carousel-track');
            this.titleElement = this.querySelector('.movie-title');
            this.descriptionElement = this.querySelector('.movie-description p');
            this.dotsContainer = this.querySelector('.carousel-dots'); 

        }
    
        connectedCallback(){
            this.render();
            this.createDots();
            this.startInterval();
            this.updateContent(0);
        }

        disconnectedCallback(){
            this.stopInterval();
        }

        createDots() {
            
            if (!this.dotsContainer) return;
            
            const totalSlides = this.data.length;
            this.dotsContainer.innerHTML = '';
        
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                dot.dataset.index = i;
                
                if (i === 0) {
                    dot.classList.add('active');
                }
                
                dot.addEventListener('click', () => {
                    this.goToSlide(i);
                    this.resetInterval();
                });
        
                this.dotsContainer.appendChild(dot);
            }
        }
        
        updateDots(index) {
            if (!this.dotsContainer) return;
            
            const dots = this.dotsContainer.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    
        updateContent(index){
            this.currentIndex = index;
            const current = this.data[this.currentIndex];

            if (this.trackElement && this.titleElement && this.descriptionElement) {
                this.trackElement.style.backgroundImage = `url(${current.image})`;
                this.titleElement.textContent = current.title;
                this.descriptionElement.textContent = current.description;
            } else{
                this.title = current.title;
                this.description = current.description;
                this.image = current.image;
            }

            this.updateDots(index);
        }

        goToSlide(index) {
            this.updateContent(index);
        }
        
        nextSlide() {
            const nextIndex = (this.currentIndex + 1) % this.data.length;
            this.goToSlide(nextIndex);
        }
        
        startInterval() {
            this.stopInterval();
            this.intervalId = setInterval(() => this.nextSlide(), this.intervalDuration);
        }
        
        stopInterval() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        }
        
        resetInterval() {
            this.stopInterval();
            this.startInterval();
        }
}
    
customElements.define("pt-carousel", MovieCarousel);