document.addEventListener('DOMContentLoaded', () => {
  const myLogo = document.querySelector('#myLogo');
  myLogo.addEventListener('click', () => {
    window.location.href = "index.html";
  });
  const about = document.querySelector('#about');
  about.addEventListener('click', () => {
    window.location.href = "about.html";
  });
  const home = document.querySelector('#home');
  home.addEventListener('click', () => {
    window.location.href = "index.html";
  })
});
document.addEventListener('DOMContentLoaded', () => {
  const linksElements = document.querySelectorAll('#myLinks a');
  const openBtn = document.querySelector('#menuHamburgerContainer');
  const myLinksContainer = document.querySelector('#myLinks');
  const myIcon = document.querySelector('#menuHamburgerContainer');
  const myIconClose = document.querySelector('#closeMenuImage');
  openBtn.addEventListener('click', () => {
    myLinksContainer.classList.add('openable');
    myIcon.classList.add('disaperable');
    myIconClose.classList.add('apearable');
  });
  const closeBtn = document.querySelector('#closeHamburger');
  closeBtn.addEventListener('click', () => {
    myLinksContainer.classList.remove('openable');
    myIcon.classList.remove('disaperable');
  });
  linksElements.forEach((e) => {
    e.addEventListener('click', () => {
      myLinksContainer.classList.remove('openable');
      myIcon.classList.remove('disaperable');
    });
  });
});