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
    parent.appendChild(removeButton)
    if (parent2) {
        removeButton.innerText = 'supprimer l\'action'
        removeButton.classList.add('removeAction')
    } else {
        removeButton.innerText = 'supprimer la liste'
        removeButton.classList.add('removeList')
    }
    removeButton.addEventListener('click',() => {
        if (parent2) {
            parent2.remove()
            removeButton.innerText = 'supprimer l\'action'
        } else {
            parent.remove()
            removeButton.innerText = 'supprimer la liste'
        }
        removeButton.remove()
    })
    return removeButton
}

function listFillling(form, input, actionContainer, div) {
    form.addEventListener('submit', (e )=>{
    e.preventDefault()
    if(input.value !== null && input.value !== ''){
    const pContainer = document.createElement('div')   
    pContainer.classList.add('action')
    actionContainer.appendChild(pContainer)
    const p = document.createElement('p')
    p.innerText = `${input.value}`
    input.value = ''
    input.placeholder = 'votre prochaine tache à réaliser';
    actionContainer.appendChild(p)
    pContainer.appendChild(p)
    removeButtonCreation(actionContainer, pContainer)
    } else {
        input.placeholder = 'veuillez rentrer une action'
        input.style.border = '1px solid red'
        input.style.color = 'red'
        input.addEventListener('focus', () => {
            input.style.border = '1px solid black'
            input.style.color = 'black' 
        })
        input.addEventListener('keypress', () => {
            input.style.border = '1px solid black'
            input.style.color = 'black' 
        })
    }
    })
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
    label.classList.add('labelList')
    label.for = `${listName}`;
    label.innerText = listName + ' : \n'
    let input = document.createElement('input');
    input.type = 'TEXT';
    input.name = `${listName}`
    input.placeholder = 'votre tache à réaliser';
    input.classList.add('input')
    let button = document.createElement('input');
    button.type = 'submit'
    button.value = 'créer une action'
    button.classList.add('submitedBtn')
    button.classList.add('btn')
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