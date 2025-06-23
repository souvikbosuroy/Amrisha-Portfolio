$(document).ready(function() {
    let menuIcon = $(".menu_icon");
    let closeIcon = $(".close_btn");
    let menu = $(".nav_menu");

    menuIcon.click(function() {
        menu.fadeIn(300);             // Show menu
        menuIcon.hide();              // Hide menu icon
        closeIcon.show();             // Show close icon
    });

    closeIcon.click(function() {
        menu.fadeOut(300);            // Hide menu
        closeIcon.hide();             // Hide close icon
        menuIcon.show();              // Show menu icon
    });

   let gridSlide = document.querySelectorAll(".grid_slide");
let socialPopup = document.querySelectorAll(".social_btn_popup");

gridSlide.forEach((gridItem, index) => {
    let popup = socialPopup[index]; // Get the corresponding popup

    gridItem.addEventListener("mouseenter", () => {
        popup.style.visibility = "visible";
        popup.style.opacity = "1";
    });

    gridItem.addEventListener("mouseleave", () => {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    });
});

  // Smooth Scroll
// Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0, left: 0, width: window.innerWidth, height: window.innerHeight
        };
      },
    });

    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.body });

    // Animate each fade-in element when it enters view
    gsap.utils.toArray('.fade-in').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
});
