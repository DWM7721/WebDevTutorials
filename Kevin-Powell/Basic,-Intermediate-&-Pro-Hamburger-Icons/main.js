const buttonThree = document.querySelector('.button-three');

buttonThree.addEventListener('click', () => {
    const isOpened = buttonThree.getAttribute('aria-expanded');
    (isOpened === 'false') ? buttonThree.setAttribute('aria-expanded', 'true') : buttonThree.setAttribute('aria-expanded', 'false');
})