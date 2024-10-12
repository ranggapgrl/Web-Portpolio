/*Toggle Navbar Icon */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/*Scroll Section */

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop- 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*Stiky navbar */
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);


/*remove toggle icon and navbar*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.add.remove('active');
};

/*scroll reveal*/
ScrollReveal({
    distance: '80px' ,
    duration: 2000 ,
    delay: 200,

});

ScrollReveal().reveal('.home-content, heading ',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container,.portofolio-box, .kontak form', { origin: 'bottom' });
ScrollReveal().reveal('.home-kontak h1, .tentang-img', { origin: 'left'});
ScrollReveal().reveal('.home-kontak p, .tentang-content', {origin: 'right' });

/*Typed Java Script*/
const typed = new Typed ('.multiplle-text', {
    strings: ['Web Developer', 'Web Design', 'Mobile Developer'],
    typedSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop: true,

});



