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

/*=============== Quick View ===============*/
const quickButton = document.querySelectorAll('.ri-eye-line'),
      quickClose = document.getElementById('quick-close'),
      quickContent = document.getElementById('quick-content');

/*=================Quick SHOW================== */

for (var a = 0; a < quickButton.length; a++) {    
    quickButton[a].addEventListener('click', () =>{
        quickContent.classList.add('show-quick')
    });
}
// if(quickButton){
//     quickButton.addEventListener('click', () =>{
//         quickContent.classList.add('show-quick')
//     })
// }

/*=================Quick HIDDEN================== */

if(quickClose){
    quickClose.addEventListener('click', () =>{
        quickContent.classList.remove('show-quick')
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





const cartButton = document.getElementById('cart-button');

if(cartButton){
    cartButton.addEventListener('click', () =>{
        window.location.href = "cart.html";
    })
}
