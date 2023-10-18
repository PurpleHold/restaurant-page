import {initialLoad} from "./initial-load.js";
import {foodMenuLoad} from "./menu-load.js";
import {contactLoad} from "./contact-load.js";
import {clearLoad} from "./clearload.js";

initialLoad();

(function chooseLoad() {
    const menuContainer = document.querySelector('.menu');
    menuContainer.addEventListener('click', function (e) { 
        if (e.target.classList.contains('menu')) {
            clearLoad();
            foodMenuLoad();
        };
        if (e.target.classList.contains('home')) {
            clearLoad();
        };
        if (e.target.classList.contains('contact')) {
            clearLoad();
            contactLoad();
        };
    });
})();


