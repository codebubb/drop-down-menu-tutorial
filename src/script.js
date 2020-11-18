const simulateHover = elem => {
    console.log('Simulate Hover called');
    const mouseEvent = new MouseEvent('mouseover');

    elem.dispatchEvent(mouseEvent);
};

Array.from(document.querySelectorAll('li'))
    .forEach(liElem => {
       liElem.addEventListener('click', simulateHover.bind(null, liElem));
    });