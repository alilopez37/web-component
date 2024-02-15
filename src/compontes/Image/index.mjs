import css from './style.css'  assert { type: 'css' };

export class Image extends HTMLElement {
    
    connectedCallback() {
        const img = document.createElement("img")
        img.classList.add("app_image")
        document.adoptedStyleSheets.push(css)
        img.setAttribute ("src", this.getAttribute("src"))
        this.appendChild(img)
    }
}