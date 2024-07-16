const project = () => {
  const aside = document.querySelector('aside');
  const asideButton = document.querySelector('.aside-button');

  const asideFormSection = aside.querySelector('.form-section');
  const addProjectButton = document.querySelector('.add-project-button');

  const projectSection = document.querySelector('.project-section');

  asideButton.addEventListener('click', () => {
    if (aside.style.visibility === 'hidden') {
      aside.style.visibility = 'visible';
      asideButton.style.justifySelf = 'end';
    } else {
      aside.style.visibility = 'hidden';
      asideButton.style.justifySelf = 'start';
    }
  });

  const isRequired = (value) => {
    if (value === '') {
      return false;
    } 
      return true;
  }

  const showError = (input, message) => {
    const fieldset = input.parentElement;
    input.classList.add('error');
    input.classList.remove('success');

    const small = fieldset.querySelector('small');
    small.style.padding = '10px 10px 0 10px';
    small.textContent = message;
  }
  
  const showSuccess = (input) => {
    const fieldset = input.parentElement;
    input.classList.add('success');
    input.classList.remove('error');

    const small = fieldset.querySelector('small');
    small.style.padding = '0';
    small.textContent = '';
  }

  const checkProjectName = () => {
    const projectName = document.querySelector('#project-name');

    let valid = false;
    const text = projectName.value.trim();

    if (!isRequired(text)) {
      showError(projectName, '*Please fill this field');
    } else {
      showSuccess(projectName);
      valid = true;
    }
    return valid;
  }

    const displayProjectName = () => {
    const projectButton = document.createElement('button');
    const projectName = document.querySelector('#project-name').value;

    projectButton.classList.add('project-button');
    projectButton.textContent = projectName;
    projectSection.appendChild(projectButton);
  }

  const createProjectForm = () => {
    const projectForm = document.createElement('form');
    projectForm.setAttribute('id','project-form');
    projectForm.setAttribute('action','post');
    projectForm.setAttribute('novalidate','true');

    const fieldset = document.createElement('fieldset');

    const input = document.createElement('input');
    input.type = 'text';
    input.setAttribute('id','project-name');
    input.placeholder = 'Ex: Birthday';
    fieldset.appendChild(input);

    const small = document.createElement('small');
    fieldset.appendChild(small);
    projectForm.appendChild(fieldset);

    const formButton = document.createElement('section');
    formButton.classList.add('form-button');
    
    const submitProjectButton = document.createElement('button');
    submitProjectButton.classList.add('submit-project-button');
    submitProjectButton.setAttribute('type', 'submit');
    submitProjectButton.textContent = 'Submit';
    formButton.appendChild(submitProjectButton);

    const cancelProjectButton = document.createElement('button');
    cancelProjectButton.classList.add('cancel-project-button');
    cancelProjectButton.setAttribute('type', 'button');
    cancelProjectButton.textContent = 'Cancel';
    formButton.appendChild(cancelProjectButton);

    cancelProjectButton.addEventListener('click', () => {
      projectForm.remove();
      aside.style.gridTemplateRows = '100px 80px 1fr';
      addProjectButton.disabled = false;
    })
    projectForm.appendChild(formButton);
    asideFormSection.appendChild(projectForm);

    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formAsideValid = checkProjectName();
      const isFormValid = formAsideValid;

      if (isFormValid) {
        displayProjectName();
        projectForm.remove();
        aside.style.gridTemplateRows = '100px 80px 1fr';
        addProjectButton.disabled = false;
        console.log('Valid form');
      } else {
        console.log('Invalid form');
      }
    })

    projectForm.addEventListener('input', (event) => {
      if (event.target.id === 'project-name') {
        checkProjectName();
      }
    })
  }

  addProjectButton.addEventListener('click', () => {
    aside.style.gridTemplateRows = '100px 200px 1fr';
    addProjectButton.disabled = true;
    createProjectForm();
  })
};
export default project;