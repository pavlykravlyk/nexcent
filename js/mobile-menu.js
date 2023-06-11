import {mobileMenuBtn, mobileMenu, menuBurgerIcon, menuCloseIcon, bodyEL} from './refs.js'

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('is-open');
    menuBurgerIcon.classList.toggle('is-hidden');
    menuCloseIcon.classList.toggle('is-hidden');
    bodyEL.classList.toggle('menu-open');
}