const buttonThree = document.querySelector('.button-three');

buttonThree.addEventListener('click', () => {
    const isOpened = buttonThree.getAttribute('aria-expanded');
    (isOpened === 'false') ? buttonThree.setAttribute('aria-expanded', 'true') : buttonThree.setAttribute('aria-expanded', 'false');
})

// fix for animation running on page load (button-two)
const buttonTwo = document.querySelector('.button-two');
buttonTwo.addEventListener('click', () => {
    const currentState = buttonTwo.getAttribute('data-state');
    if (!currentState || currentState === 'closed') {
        buttonTwo.setAttribute('data-state', 'opened');
        buttonTwo.setAttribute('aria-expanded', 'true');
    } else {
        buttonTwo.setAttribute('data-state', 'closed');
        buttonTwo.setAttribute('aria-expanded', 'false');
    }
    
})