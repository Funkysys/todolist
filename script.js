const btn = document.querySelector('.create')
const container = document.querySelector('.container')

function getUrlParam() {
    var url = window.location.href;
    var param = url.split('?')[1];
    var constructeur = new URLSearchParams(param);
    return constructeur
}

function removeButtonCreation(parent, parent2) { 
    const removeButton = document.createElement('button')
    removeButton.classList.add('btn')
    removeButton.innerText = 'supprimer l\'action'
    parent.appendChild(removeButton)
    removeButton.addEventListener('click',() => {
        if (parent2) {
            parent2.remove()
        } else {
            parent.remove()
        }
        removeButton.remove()
    })
}

function listFillling(form, input, actionContainer, listName, div) {
    form.addEventListener('submit', (e )=>{
    e.preventDefault()
    const p = document.createElement('p')
    p.innerText = `${input.value}`
    actionContainer.appendChild(p)
    removeButtonCreation(actionContainer, p)
    })
    console.log(div);
}

function createForm(listName, div) {
    let form = document.createElement('form')
    form.name = listName;
    form.method = 'GET';
    form.id = `${listName}`;
    // création de la div contenant label input
    const actionContainer = document.createElement('div')
    actionContainer.classList.add('actionContainer')
    let label = document.createElement('label');
    label.for = `${listName}`;
    label.innerText = listName + ' : \n'
    let input = document.createElement('input');
    input.type = 'TEXT';
    input.name = `${listName}`
    input.value = 'votre tache à réaliser';
    let button = document.createElement('input');
    button.type = 'submit'
    button.value = 'créer'
    button.class = 'btn submit'
    // attache des éléments les un aux autres
    // label, input, button => div action
    actionContainer.appendChild(label)
    actionContainer.append(input)
    actionContainer.append(button)
    // action => form
    form.appendChild(actionContainer)
    // form => div
    div.appendChild(form)
    // div => container
    container.appendChild(div)
    // appel de fonction au submit du form
    listFillling(form, input, actionContainer, listName, div);
}

function createCard(listName) {
    // création de la div listCard
    const div = document.createElement('div')
    div.classList.add('listCard')
    removeButtonCreation(div)
    // création Form
    createForm(listName, div)
}

function createList() {
    //récupération du nom de la liste
    const listName = prompt('Donnez un nom à votre nouvelle liste')
    // console.log(listName);
    createCard(listName)
}

btn.addEventListener('click', () => createList())