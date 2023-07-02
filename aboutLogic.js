document.addEventListener('DOMContentLoaded', () => {
    const myLogo = document.querySelector('#myLogo');
    myLogo.addEventListener('click', () => {
        window.location.href = "index.html";
    });
    const about = document.querySelector('#about');
    about.addEventListener('click', () => {
        window.location.href = "about.html";
    })
});