const hamburger = document.querySelector('.hamburger');
const linksNavbar = document.querySelector('.link-pages');


hamburger.addEventListener('click', ()=>{
    linksNavbar.classList.toggle('show-links');
    hamburger.classList.toggle('bring-opacity');
})
