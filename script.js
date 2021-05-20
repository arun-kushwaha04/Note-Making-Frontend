let body = document.querySelector('body');
window.addEventListener('load', () => {
    body.classList.add('visible');

    const token = localStorage.getItem('userToken');
    if (token) {
        location.href = `/Pages/Dashboard/index.html`;
    }
})