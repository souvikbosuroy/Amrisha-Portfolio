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

window.addEventListener("load", () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    });
});
