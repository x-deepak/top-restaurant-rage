import "./style.css";

import {load_home} from "./home.js";
import {load_menu} from "./menu.js";
import {load_about} from "./about.js";

load_home();

let nav = document.querySelector("nav");

nav.addEventListener("click", event => {
    if(event.target.className === "home"){
        load_home();
    }
    else if(event.target.className === "menu"){
        load_menu();
    }
    else if(event.target.className === "about"){
        load_about();
    }

})