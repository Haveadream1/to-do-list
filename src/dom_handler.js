// Handle all the DOM with a module

export const renderAside = () => {
    const aside = document.querySelector('aside');
    const asideButton = document.querySelector('.aside-button');

    asideButton.addEventListener('click', () => {
        if (aside.style.visibility === 'hidden') {
          aside.style.visibility = 'visible';
          asideButton.style.justifySelf = 'end';
        } else {
          aside.style.visibility = 'hidden';
          asideButton.style.justifySelf = 'start';
        }
    });
};

export const renderMain = () => { 

};