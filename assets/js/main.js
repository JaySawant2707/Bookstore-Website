/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content');

/*=================SEARCH SHOW================== */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*=================SEARCH HIDDEN================== */

if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}
/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content');

/*=================LOGIN SHOW================== */
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/*=================LOGIN HIDDEN================== */

if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header');

    this.scrollY >=50 ? header.classList.add('shadow-header')
                      : header.classList.remove('shadow-header') ;
}
window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },

    breakpoints:{
        1220:{
            spaceBetween: -32,
        }
    }
  });

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints:{
        1150:{
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
  });

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new_swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints:{
        1150:{
            slidesPerView: 3,
        }
    }
  });

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial_swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints:{
        1150:{
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
  });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >=350 ? scrollUp.classList.add('show_scroll')
                       : scrollUp.classList.remove('show_scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () =>document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>themeButton.classList.contains(iconTheme) ? ri-moon-line : ri-sun-line

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedTheme === 'dark' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selectedTheme', getCurrentTheme())
    localStorage.setItem('selectedItem', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    //reset: true, // Animations repeat
})

sr.reveal('.home_data, .featured_container, .new_container, .join_data, .testimonial_container, .footer');
sr.reveal('.home_images', {delay: 600});
sr.reveal('.services_card', {interval: 100});
sr.reveal('.discount_data', {origin: 'left'});
sr.reveal('.discount_images', {origin: 'right'});