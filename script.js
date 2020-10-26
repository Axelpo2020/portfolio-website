//animation nav bar 
function animationNavbar() {
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            nav.classList.add('sticky');

        } else {
            nav.classList.remove('sticky');

        }
    })
}
animationNavbar();

 // scroll-up button show/hide script
 function btnScrollup() {
    const btnScrollup = document.querySelector('.scroll-up-btn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btnScrollup.classList.add('show')
        } else {
            btnScrollup.classList.remove('show')
        }
    })
 }
 btnScrollup();

// nav bar responsive
function menuResponsive() {
    const burger = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav-links');
    const li = document.querySelector('.nav-links').children
    burger.addEventListener('click', ()=> {
        burger.classList.toggle('active');
        nav.classList.toggle('active')
    })
    for (let i = 0; i < li.length; i++) {
        ulChildrens = li[i];
        ulChildrens.addEventListener('click', ()=> {
            burger.classList.remove('active');
            nav.classList.remove('active')
        })
     }
}
menuResponsive();


 // owl carousel script
    $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        }
    }
});

// typing animation script
const typed = new Typed(".typing", {
    strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

const typed2 = new Typed(".typing-2", {
    strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});