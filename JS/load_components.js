fetch('./global components/nav.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.header').innerHTML = data;

    // Attach scroll event after nav is inserted
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });
  })
  .catch(error => console.error('Error loading nav:', error));

    // Load Footer (separately)
  fetch('./global components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
  