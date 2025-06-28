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
