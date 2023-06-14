const home = () => {
    let container = document.querySelector('.container');
    let buttonAdd = document.querySelector('.add');

    const createTodo = () => {
        let createSection = document.createElement('section');
        createSection.classList.add('todo');
        container.appendChild(createSection);

        let createCheckBox = document.createElement('input');
        createCheckBox.type = 'checkbox';
        createCheckBox.classList.add('checkbox');
        createSection.appendChild(createCheckBox);

        let createText = document.createElement('input');
        createText.type = 'text';
        createText.classList.add('text');
        createSection.appendChild(createText);
     }
    buttonAdd.addEventListener('click', createTodo);

}

export default home;