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

export const showError = (input, message) => { 
  const fieldset = input.parentElement;
  input.classList.add('error');
  input.classList.remove('success');

  const small = fieldset.querySelector('small');
  small.style.padding = '10px 10px 0 10px';
  small.textContent = message;
};

export const showSuccess = (input) => {
  const fieldset = input.parentElement;
  input.classList.add('success');
  input.classList.remove('error');

  const small = fieldset.querySelector('small');
  small.style.padding = '0';
  small.textContent = '';
};

export const displayProjectName = () => {
  const projectButton = document.createElement('button');
  const projectName = document.querySelector('#project-name').value;
  const projectSection = document.querySelector('.project-section');

  projectButton.classList.add('project-button');
  projectButton.textContent = projectName;
  projectSection.appendChild(projectButton);

  projectButton.addEventListener('click', () => {
    const selected = document.querySelectorAll('.selected');
    if (projectButton.classList !== 'selected') { /* CHANGE TO ! WITH CONTAINS */
      selected.forEach(e => e.classList.remove('selected'));
      projectButton.classList.add('selected');
      // window.alert('test');
    }
  })
}

