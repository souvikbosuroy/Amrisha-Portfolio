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
});
