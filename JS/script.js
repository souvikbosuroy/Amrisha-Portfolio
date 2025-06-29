$(document).ready(function ($) {
    let menuIcon = $(".menu_icon");
    let closeIcon = $(".close_btn");
    let menu = $(".nav_menu");

    menuIcon.click(function () {
        menu.fadeIn(300);             // Show menu
        menuIcon.hide();              // Hide menu icon
        closeIcon.show();             // Show close icon
    });

    closeIcon.click(function () {
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
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        lerp: 0.06,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

window.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.gallery_wrapper');
  imagesLoaded(grid, () => {
    new Masonry(grid, {
      itemSelector: '.gal_slide',
      columnWidth: '.grid-sizer',
      gutter: 16,
      percentPosition: true
    });
  });
  });

});



