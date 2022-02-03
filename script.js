const btn = document.querySelector('.create')
const container = document.querySelector('.container')


function pressEnter(event, button) {
    let code = event.which || event.keyCode; //Selon le navigateur c'est which ou keyCode
    if (code == 13) { //le code de la touche Enter
        button.addEventListener('submit', (e) => e.preventDefault)
    }
}


function formSubmited(form) {

}

function createList() {
    const listName = prompt('Donnez un nom à votre nouvelle liste')
    console.log(listName);
    const div = document.createElement('div')
    div.classList.add('listCard')
    let form = document.createElement('form')
    form.name = listName;
    form.method = 'POST';
    form.action = '#';
    form.id = listName;
    const actionContainer = document.createElement('div')
    actionContainer.classList.add('actionContainer')
    let label = document.createElement('label');
    label.name = listName;
    label.innerText = listName + ' : \n'
    let input = document.createElement('input');
    input.type = 'TEXT';
    input.name = 'myInput';
    input.value = 'votre tache à réaliser';
    let button = document.createElement('button');
    button.class = 'btn submit'
    button.innerText = 'Créer'
    actionContainer.appendChild(label)
    actionContainer.append(input)
    actionContainer.append(button)
    form.appendChild(actionContainer)
    div.appendChild(form)
    container.appendChild(div)
    pressEnter(form)
}

btn.addEventListener('click', () => {
    createList()
})