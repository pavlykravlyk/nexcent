import {scrollBtn, bodyEL} from './refs.js'


document.addEventListener('scroll', handleScroll);

function handleScroll() {
  const scrollableHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  if (document.documentElement.scrollTop / scrollableHeight > 0.3) {
    if (!scrollBtn.classList.contains('show-scroll-btn') && !bodyEL.classList.contains('is-open'))
      scrollBtn.classList.add('show-scroll-btn');
  } else {
    if (scrollBtn.classList.contains('show-scroll-btn'))
      scrollBtn.classList.remove('show-scroll-btn');
  }
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

scrollBtn.addEventListener('click', scrollToTop);