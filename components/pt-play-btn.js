class PlayBtn extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        const btn = document.createElement("button");
        btn.innerHTML = `<i class="fas fa-play"></i> ТОГЛУУЛАХ`;
        btn.className = "btn-play"; 
    
        this.appendChild(btn);
    }
}

customElements.define("pt-play-btn", PlayBtn);

class AddBtn extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){

        const btn = document.createElement("button");
        btn.innerHTML = `<i class="fas fa-plus"></i>`;
        btn.className = "btn-add";

        this.appendChild(btn);
    }

}

customElements.define("pt-add-btn", AddBtn);

class HeaderMenu extends HTMLElement {

    constructor(){
        super();
    }

    connectedCallback(){

        const header = document.createElement("div");
        header.innerHTML = 
        `<div class="header-left-container">
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
            </div>`;

            header.className = "main-header-container";

            this.appendChild(header);

    }

}

customElements.define("pt-header-menu",HeaderMenu);



