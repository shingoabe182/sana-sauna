document.addEventListener('DOMContentLoaded', function() {
    // --- Basic Menu and Header Logic ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('header');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('nav-open');
        navMenu.classList.toggle('nav-open');
    });

    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            hamburgerMenu.classList.remove('nav-open');
            navMenu.classList.remove('nav-open');
        }
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // 1. Horizontal scroll for facility section
    const facilityTrack = document.querySelector(".facility-track");
    if (facilityTrack) {
        const roomContainers = gsap.utils.toArray(".facility-track .room-container");
        
        gsap.to(facilityTrack, {
            x: () => -(facilityTrack.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: ".facility-horizontal-scroll",
                start: "top top",
                end: () => "+=" + (facilityTrack.scrollWidth - window.innerWidth),
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });
    }
});
