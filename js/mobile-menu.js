import {mobileMenuBtn, mobileMenu, menuBurgerIcon, menuCloseIcon} from './refs.js'

mobileMenuBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('is-open');
    // toggleMenuIcon()
    menuBurgerIcon.classList.toggle('is-hidden');
    menuCloseIcon.classList.toggle('is-hidden');
}

// function toggleMenuIcon() {
//     // menuBurgerIcon.style.display = "inline";
//     // menuCloseIcon.style.display = "none";
//     menuBurgerIcon.classList.toggle('is-hidden');
//     menuCloseIcon.classList.toggle('is-hidden');
// }