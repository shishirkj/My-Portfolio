//          toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
};


//          scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
            });
        };
    });
    //                  sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //                  remove toggle icon navbar when clicked on navbar
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
};

//                      scroll reveal
 ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
});

//                      Initialize ScrollReveal
ScrollReveal().reveal('.home-content, .heading', { delay: 200, origin: 'top' });

ScrollReveal().reveal('.rounded-image, .project-box, .contact form, .techstack-container, .heading-skills,.about-content', { delay: 200, origin: 'bottom' });

ScrollReveal().reveal('.home-content h1', { delay: 250, origin: 'left' });
ScrollReveal().reveal('.home-content p', { delay: 250, origin: 'left' });

//                      typed js
const typed = new Typed('.multiple-text', {
    strings: ['Open Source Developer','Full Stack Developer','Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});