const body = document.body;
const tittle = document.getElementById('tittle');
const sun = document.getElementById('sun');
const modal = document.querySelector('.modal');
const add = document.getElementById('add');
const public = document.getElementById('public')
const container = document.querySelector('.container');
const header = document.getElementById('head');
const library = document.querySelector('.library');
let nameBook = document.getElementById('name')
let authorBook = document.getElementById('author')
let pagesBook = document.getElementById('pages')


sun.addEventListener('click', () => {
    if(body.style.background === 'rgb(255, 255, 255)') {
    body.style.cssText = 'background: #000; color: #fff';
    tittle.style.cssText = 'text-shadow: 0px 0px 5px #fff;'
    modal.style.cssText = 'color: black'
    sun.innerHTML = '<img src="moon_stars_night_midnight_sky_icon_194278.png" alt="" height="30" width="30">'
    header.style.cssText = 'box-shadow: 0 0 15px #fff;'
    }
    else {
    body.style.cssText = 'background: #fff; color: #000'
    modal.style.cssText = 'color: black; box-shadow: 1px 1px 20px #fff'
    tittle.style.cssText = 'text-shadow: 0px 0px 5px #000';
    sun.innerHTML = '<img src="sun_sunny_summer_icon-icons.com_62700 (1).png" alt="" height="30" width="30">'
        header.style.cssText = 'box-shadow: 0 0 15px #000;'
    }
})

add.addEventListener('click', () => {
    modal.style.cssText = 'opacity: 1; display: flex; flex-direction: column; justify-content: center;align-items: center;text-align: center;gap: 1.2rem;';
    container.style.cssText = 'z-index: .7; opacity: .3';
})

const myLibrary = ['us', 'tis', 33, 'read', 'remove'];

const shelf = document.createElement('div');
library.appendChild(shelf);
shelf.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 2rem;min-width: 20rem; min-height: 10rem; box-shadow: 0 0 15px #000;';

myLibrary.forEach(books => {
    const element = document.createElement('p');
    element.textContent = books;
    shelf.appendChild(element);
})

function Book(name, author, pages, isRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead
}

function putBook() {
const name = nameBook.value;
const author = authorBook.value;
const pages = pagesBook.value;
}


public.addEventListener('click', () => {
    modal.style.display = 'none';
    container.style.cssText = 'z-index: 1; opacity: 1';
    nameBook.value = '';
})






// const bookDiv = document.createElement('div')
// library.appendChild(bookDiv)


const read = document.createElement('button');
read.textContent = "read";
read.style.cssText = 'background: red'
myLibrary.push(read);