

// addEventListener

    // Add Book
document.getElementById('button').addEventListener('click', function (event) {
    event.preventDefault();
    console.log(document.getElementById('button'));
    showDialog();
})

    // Close Dialog
document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();

    let title = document.querySelector('#titleInf');
    let author = document.querySelector('#authorInf');
    let pages = document.querySelector('#pagesInf');
    let category = document.querySelector('#categoryMenu');
    let read = document.querySelector('#checkbox');

    if (read.checked) {
        read = 'Read';
    } else {
        read = 'Not read';
    }

    addBookToLibrary(title.value, author.value, pages.value, category.value, read);
    closeDialog();
})

    // Close dialog
document.querySelector('.exit').addEventListener('click', function (event) {
    closeDialog();
})

    // delete - read/not read

document.addEventListener('click', function (event) {
    let target = event.target;

    if (target.id === 'buttonForDelete') {
        console.log(target.parentNode.parentNode);
        deleteBook(target.parentNode.parentNode);
    } else if (target.id === 'buttonForCheck') {
        console.log(target.parentNode.parentNode);
        readBook(target.parentNode.parentNode);
    }
})
    

// function

function showDialog() {
    const dialog = document.querySelector('.dialog');
    const overlay = document.getElementById('overlay');

    dialog.classList.add('open');
    overlay.style.display = 'block';
}

function closeDialog() {
    const dialog = document.querySelector('.dialog');
    const overlay = document.getElementById('overlay');

    resetForm();
    dialog.classList.remove('open');
    overlay.style.display = 'none';
}

const myLibrary = [];

function Book(title, author, pages, category, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.category = category;
    this.read = read;
}

function addBookToLibrary(title, author, pages, category, read) {
    let newBook = new Book(title, author, pages, category, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    createBookCard(newBook);

}

function createBookCard(book) {
    const card = document.createElement('div');
    card.setAttribute('id', 'card');

    const info = document.createElement('div');
    info.setAttribute('id', 'info');

    const title = document.createElement('h3');
    title.textContent = book.title;
    title.classList.add('title');

    const author = document.createElement('h4');
    author.textContent = book.author;

    const pages = document.createElement('p');
    pages.setAttribute('id', 'pages');
    pages.innerHTML = `<span>${book.pages}</span> Páginas`;

    const category = document.createElement('p');
    category.setAttribute('id', book.category);
    category.classList.add('category');
    category.textContent = book.category;

    info.appendChild(title);
    info.appendChild(author);
    info.appendChild(pages);
    info.appendChild(category);
    card.appendChild(info);

    const options = document.createElement('div');
    options.setAttribute('id', 'options');

    const buttonForDelete = document.createElement('button');
    buttonForDelete.setAttribute('id', 'buttonForDelete');
    buttonForDelete.textContent = 'Delete';

    const buttonForCheck = document.createElement('button');
    buttonForCheck.setAttribute('id', 'buttonForCheck');
    
    if (book.read == 'Read') {
        buttonForCheck.classList.add('Read');
    } 
    buttonForCheck.textContent = book.read;

    options.appendChild(buttonForDelete);
    options.appendChild(buttonForCheck);
    card.appendChild(options);
    document.querySelector('main').appendChild(card);

    resetForm();
}

function resetForm() {
    let title = document.querySelector('#titleInf');
    let author = document.querySelector('#authorInf');
    let pages = document.querySelector('#pagesInf');
    let category = document.querySelector('#categoryMenu');
    let read = document.querySelector('#checkbox');

    title.value = '';
    author.value = '';
    pages.value = '';
    category.selectedIndex = 0;
    read.checked = false;
}

function readBook(cardDiv) {
    let title = cardDiv.querySelector('#info .title').textContent;
    let index = myLibrary.findIndex(book => book.title === title);

    if (index !== -1) {
        let buttonForCheck = cardDiv.querySelector('#buttonForCheck');
        //Cambio el valor de read
        if (myLibrary[index].read == 'Read') {
            myLibrary[index].read = 'Not Read';
            buttonForCheck.textContent = 'Not Read';
        } else {
            myLibrary[index].read = 'Read';
            buttonForCheck.textContent = 'Read';
        }
    }
}

function deleteBook(cardDiv) {
    let title = cardDiv.querySelector('#info .title').textContent;
    let index = myLibrary.findIndex(book => book.title === title);

    if (index !== -1) {
        myLibrary.splice(index, 1); // Elimina el libro del array de objetos
    }

    // Elimina el elemento del DOM
    cardDiv.remove();
}