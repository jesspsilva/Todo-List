const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const error = document.querySelector('.error');
const empty = document.querySelector('.empty');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

    list.innerHTML += html;
};

//Add todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim().toLowerCase();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    } else {
        error.style.display = "block";
    }
    if (list.children.length !== 0){
        empty.classList.add('hide');
    }
});

//Delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    if (list.children.length == 0 ){
        empty.classList.remove('hide');
    } 
});

//Filter todos with the search keyword
const filterTodos = (searchTodo) =>{ 
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(searchTodo))
    .forEach(todo => todo.classList.add('hide'));

    //Remove the hide class when the text includes the search
    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(searchTodo))
    .forEach(todo => todo.classList.remove('hide'));
};

//Search bar event
search.addEventListener('keyup', () => {
    const searchTodo = search.value.trim();
    filterTodos(searchTodo);
});
