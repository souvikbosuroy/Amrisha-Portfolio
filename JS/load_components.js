  fetch('./global components/nav.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.header').innerHTML = data;
    })
    .catch(error => console.error('Error loading nav:', error));

      fetch('./global components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));