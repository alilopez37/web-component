import { Label } from "./compontes/Label/index.mjs";
import { Image } from "./compontes/Image/index.mjs";

console.log("Jajaj");

window.customElements.define("app-label",Label)
window.customElements.define("app-img",Image)

const label = document.createElement("app-label");
label.setAttribute("title","Hola world")

const image = document.createElement("app-img")
image.setAttribute("src","https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Freact%2Fque-es-react-1.png&w=1920&q=75")

document.body.append(label, image);