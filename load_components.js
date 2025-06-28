document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});
