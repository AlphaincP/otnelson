//navbar open and close
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navigation');
const closeButton = document.getElementById('menu-close');


menu.addEventListener('click',() =>{
    navbar.style.display = 'block';
    menu.style.display = 'none';
    closeButton.style.display = 'block';
})
closeButton.addEventListener('click',() =>{
    navbar.style.display = 'none';
    menu.style.display = 'block';
    closeButton.style.display = 'none';
})

//scroll header
const header = document.querySelector('.header');

function scrollHeader(){
    if(window.scrollY >= 70){
       header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}
window.addEventListener('scroll',scrollHeader);

//scroll section active tab
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);


