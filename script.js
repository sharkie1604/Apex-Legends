// JS code for the movement of Going Merry. It will register a scroll and
//then change the properties of ship. If GSAP is unable to load from the
// source provided it will display the error

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



const cards = document.querySelectorAll('.character-info div');


cards.forEach(card => {
  
  const audio = card.querySelector('audio');

  
  card.addEventListener('mouseenter', () => {
    if (audio) {
      audio.currentTime = 0; 
      audio.play().catch(error => {
        console.log("Browser blocked autoplay. Click anywhere on the page first!");
      });
    }
  });

 
  card.addEventListener('mouseleave', () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
});