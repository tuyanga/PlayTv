class PlayBtn extends HTMLElement {
    constructor() {
        super();
    }
    render(){

        this.innerHTML = `<button class = "btn-play"><i class="fas fa-play"></i> ТОГЛУУЛАХ</button>`;
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define("pt-play-btn", PlayBtn);

class AddBtn extends HTMLElement {
    constructor(){
        super();
    }
    render(){
        this.innerHTML = `<button class = "btn-add"><i class="fas fa-plus"></i></button>`;
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define("pt-add-btn", AddBtn);

class HeaderMenu extends HTMLElement {

    constructor(){
        super();
    }

    render(){
        this.innerHTML = 
        `
            <div class=" main-header-container">
                <div class="header-left-container">
                    <div class="logo"><a href="#">PlayTV</a></div>
                        <nav>
                            <ul>
                                <li><a href = "#">Нүүр</a></li>
                                <li><a href = "#">TV</a></li>
                                <li><a href = "#">BOX</a></li>
                                <li><a href = "#">Миний жагсаалт</a></li>
                            </ul>
                        </nav>
                    </div>
                <div class="header-right-container">
                    <div class="user-actions">
                        <button><i class="fas fa-search"></i></button>
                        <button><i class="fas fa-bell"></i></button>
                        <button><i class="fas fa-user"></i></button>
                    </div>
                </div>
            </div>
        `;
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define("pt-header-menu",HeaderMenu);