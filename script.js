document.addEventListener("DOMContentLoaded", (event) => {
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    const anm = gsap.timeline({
        scrollTrigger:{
            trigger: ".parallax-container",
            scrub: 1
        }
    });
    anm.to(".ship", {x:"471vw"});
    anm.to(".ship-message", {
        opacity: 0,
        duration: 0.0
    }, 0.2);
    anm.to(".ship-message", {
        opacity: 1,
        duration: 0.2
    },0.4);
    // gsap.to(".ship", {
    //    x: "467vw",
    //    scrollTrigger: {
    //      trigger: ".parallax-container",
    //      scrub: 1
    //    }
    // });
  } else {
    console.error("GSAP did not load correctly.");
  }
});


document.addEventListener("DOMContentLoaded", () => {
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".navlinks").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
});