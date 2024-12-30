const container = document.querySelector('.container');
const library = document.querySelector('.library');
const shelf = document.querySelector('.shelf')
const modalWindow = document.querySelector('.modal');
const nameInput = document.getElementById('name');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const addBook = document.getElementById('add');
const publicBook = document.getElementById('public');
const checkBox = document.getElementById('check')

addBook.addEventListener('click', () => {
    modalWindow.style.cssText = 'opacity: 1; display: flex; flex-direction: column; justify-content: center;align-items: center;text-align: center;gap: 1.2rem;';
    container.style.cssText = 'z-index: .7; opacity: .3';
})

const myLibrary = [];

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function displayElement() {
  library.textContent = '';
  myLibrary.forEach(books => {
    const element = document.createElement('div');
    element.innerHTML = 
    `<h3>${books.name}</h3>
    <p>${books.author}</p>
    <p>${books.pages}</p>
    <button id='toogleRead'>${books.isRead}</button>
    <button id='delBtn'>Удалить книгу</button>`
    library.appendChild(element);
    element.classList.add('shelf');

    const toogleRead = document.getElementById('toogleRead');
    toogleRead.addEventListener('click',() => {
     if(toogleRead.textContent === 'Прочтена') {
    toogleRead.textContent = 'Не прочитана';
    toogleRead.style.background = '#c60000'
    }
     else {
    toogleRead.textContent = 'Прочтена';
    toogleRead.style.background = 'green'
    }
})
  const deleteBtn = document.getElementById('delBtn');
  deleteBtn.addEventListener('click',() => {
  element.remove();
  myLibrary.length = 0;
  })
 })
}


function putBook() {
const name = nameInput.value;
const author = authorInput.value;
const pages = parseInt(pagesInput.value);
const isRead = checkBox.checked? 'Прочитана' : 'Не прочитана';
const checkBack = checkBox.checked ? '#c60000' : 'green';
checkBox.style.background = checkBack;
   if(name && author && !isNaN(pages)) {
    const newBook = new Book(name, author, pages, isRead);
    myLibrary.push(newBook);
    displayElement()
   }
   else {
     alert("Заполните все бланки или введите корректные значения")
  }
}

publicBook.addEventListener('click', () => {
    putBook();
    modalWindow.style.cssText = 'display: none;';
    container.style.cssText = 'z-index: 1; opacity: 1';
    nameInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    checkBox.checked = false
})







// const read = document.createElement('button');
// read.textContent = "read";
// read.style.cssText = 'background: red'
// myLibrary.push(read);


