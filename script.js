const btn = document.querySelector('.create')
const container = document.querySelector('.container')


function getUrlParam() {
    var url = window.location.href;
    var param = url.split('?')[1];
    var constructeur = new URLSearchParams(param);
    return constructeur
}

function changeStatus(parent) {
    const standingButton = document.createElement('button')
    standingButton.classList.add('btn')
    standingButton.innerText = '"en cours"'
    standingButton.style.backgroundColor = 'lightgoldenrodyellow'
    parent.appendChild(standingButton)
    
    standingButton.addEventListener('click', () => {
        if (parent.style.backgroundColor === "lightgoldenrodyellow") {
            parent.style.backgroundColor = "rgb(166, 222, 230)"
        } else {
            parent.style.backgroundColor = 'lightgoldenrodyellow'
        } 
    })
}

function removeButtonCreation(parent, parent2) { 
    const removeButton = document.createElement('button')
    removeButton.classList.add('btn')
    removeButton.style.backgroundColor = '#ffb8b8'
    if (parent2) {
        parent2.appendChild(removeButton)
        removeButton.innerText = 'supprimer l\'action'
        removeButton.classList.add('removeAction')
    } else {
        parent.appendChild(removeButton)
        removeButton.innerText = 'supprimer la liste'
        removeButton.classList.add('removeList')
    }
    removeButton.addEventListener('click',() => {
        if (parent2) {
            parent2.remove()
        } else {
            parent.remove()
        }
        removeButton.remove()
    })
    return removeButton
}

function listFillling(form, input, actionContainer) {
    form.addEventListener('submit', (e )=>{
    e.preventDefault()
    if(input.value !== null && input.value !== ''){
    const pContainer = document.createElement('div')   
    pContainer.classList.add('action')
    actionContainer.appendChild(pContainer)
    const p = document.createElement('p')
    p.innerText = `${input.value}`
    input.value = ''
    input.placeholder = 'votre prochaine tache ?? r??aliser';
    actionContainer.appendChild(p)
    pContainer.appendChild(p)
    changeStatus(pContainer)
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
    // cr??ation de la div contenant label input
    const actionContainer = document.createElement('div')
    actionContainer.classList.add('actionContainer')
    let label = document.createElement('label');
    label.classList.add('labelList')
    label.for = `${listName}`;
    label.innerText = listName + ' : \n'
    let input = document.createElement('input');
    input.type = 'TEXT';
    input.name = `${listName}`
    input.placeholder = 'votre tache ?? r??aliser';
    input.classList.add('input')
    let button = document.createElement('input');
    button.type = 'submit'
    button.value = 'cr??er une action'
    button.classList.add('submitedBtn')
    button.classList.add('btn')
    // attache des ??l??ments les un aux autres
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
    listFillling(form, input, actionContainer);
}

function createCard(listName) {
    // cr??ation de la div listCard
    const div = document.createElement('div')
    div.classList.add('listCard')
    removeButtonCreation(div)
    // cr??ation Form
    createForm(listName, div)
}

function createList() {
    //r??cup??ration du nom de la liste
    const listName = prompt('Donnez un nom ?? votre nouvelle liste')
    // console.log(listName);
    createCard(listName)
}

btn.addEventListener('click', () => createList())