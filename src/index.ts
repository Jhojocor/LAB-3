import "./components/index"

class AppContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
        }
        render(){
        
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./style.css">
                <app-card></app-card>
                `;
            }
        }
    }

customElements.define('app-container', AppContainer);
