//animation nav bar 
const nav = document.querySelector('nav');
const span = document.querySelector('.span-topbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('sticky');
        span.classList.add('white');
    } else {
        nav.classList.remove('sticky');
        span.classList.remove('white');
    }
})

    
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
