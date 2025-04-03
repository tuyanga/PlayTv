class PlayBtn extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        // Create button
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

