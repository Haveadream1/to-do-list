import completed from './completed';
import todo from './todo';

const home = () => {
    let container = document.querySelector('.container');
    let buttonAdd = document.querySelector('.add-to-do');
    let buttonTab = document.querySelector('.tab');
    let aside = document.querySelector('aside');
    let buttonCompleted = document.querySelector('.button-completed');
    let buttonTodo = document.querySelector('.button-to');
    let formSection = document.querySelector('.form-section');
    let FormText = document.querySelector('#form-text');
    let form = document.querySelector('#form');
    let formAside = document.querySelector('#form-aside');
    let buttonAddProject = document.querySelector('.add-project');
    let sectionAside = document.querySelector('.section-aside');
    let projectName = document.querySelector('#project-name');
    let buttonSubmitCancel = document.querySelector('.button-submit-cancel');
    let myArray = [];

    class Object {
        constructor(date, text) {
            this.date = date;
            this.text = text;
        };
    }
    
    const getValue = () => {
        let text = document.querySelector('#form-text').value;
        let date = document.querySelector('#form-date').value;
        let newTodo = new Object(date, text);
        myArray.push(newTodo);
        console.log(myArray); 
    }

    //double creation issue
    const createTodo = () => {
        for(let i = 0; i < myArray.length; i++) {
            let object = myArray[i];

            let createSection = document.createElement('section');
            createSection.classList.add('todo');
            container.appendChild(createSection);
    
            let createCheckBox = document.createElement('input');
            createCheckBox.type = 'checkbox';
            createCheckBox.classList.add('checkbox');
            createSection.appendChild(createCheckBox);
    
            let createText = document.createElement('p');
            createText.type = 'text';
            createText.classList.add('text');
            createText.textContent = `${object.text}`;
            createSection.appendChild(createText);
        }
     }


    buttonAdd.addEventListener('click', function() {
        formSection.style.visibility = 'visible';
        FormText.value = '';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        getValue();
        formSection.style.visibility = 'hidden';
        createTodo();
    });
        
    buttonSubmitCancel.addEventListener('click', function() {
        formSection.style.visibility = 'hidden';
        FormText.value = '';
    });

    // aside
    buttonTab.addEventListener('click', function() {
        aside.classList.toggle('visibility');
    });

    buttonAddProject.addEventListener('click', function() {
        sectionAside.style.visibility = 'visible';
        projectName.value = '';
    });

    formAside.addEventListener('submit', function(event) {
        event.preventDefault();
        sectionAside.style.visibility = 'hidden';
    })

    let buttonProjectCancel = document.querySelector('.button-project-cancel');
    buttonProjectCancel.addEventListener('click', function() {
        sectionAside.style.visibility = 'hidden';
        projectName.value = '';
    } )

    // tab
    buttonCompleted.addEventListener('click', completed);
    buttonTodo.addEventListener('click', todo);
}

export default home;

/*


Create an object each time we create a new todo
Take the input value after focus loose
need to find a way to change the object and not creating a new one
for completed remove the capacity of  creating new todo
put it like only read
if the checkbox if on on take the object and create that one in the completed page
add style line with position relative to the box 
tab show with toggle
option create a group

*/