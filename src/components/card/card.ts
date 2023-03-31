import {getInfo} from '../../api'
import {character} from './types/type'

export default class Card extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    async connectedCallback(){
        //console.log(getInfo());
        const charactersinfo = await getInfo();
        this.render(charactersinfo);
    }
    
    render(charactersinfo: Array<character>){
        
            if(!this.shadowRoot) return;{
                const dataDisney = charactersinfo.map(({name, imageUrl}) => `
                    
                    <div class="card">
                    <img src="${imageUrl}">
                    <h2>${name}</h2>
                    </div>
                `);
                this.shadowRoot.innerHTML = `
                    <link rel="stylesheet" href="./style.css">
                    <div class="container1">
                    ${dataDisney.join("")}
                    </div>
                `
            }

    }
}

customElements.define('app-card', Card);