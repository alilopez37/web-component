import css from './styles.module.css'  assert { type: 'css' };


export class Label extends HTMLElement {

    constructor(){
        super()
        console.log("Inicializando");
        console.log(css);
        console.log({css});
   
    }

    connectedCallback() {
        const label = document.createElement("label")
        label.classList.add("app_label")
        document.adoptedStyleSheets.push(css)
        //this.shadowRoot.adoptedStyleSheets = [css]
        console.log(label);
        label.innerText = this.getAttribute("title")
        this.appendChild(label)
      }

}
