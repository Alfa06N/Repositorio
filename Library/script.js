class Book {
    constructor(title, author, pages, category, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.category = category;
        this.read = read;
    }
}

const Library = class {
    constructor() {
        if (!Library.instance) {
            this.books = [];
            Library.instance = this;
        }
    }

    addBook(title, author, pages, category, read) {
        const newBook = new Book(title, author, pages, category, read);

        this.books.push(newBook);
        console.log(this.books); 
        Interface.createBookCard(newBook);
    }

    getBooks() {
        return this.books;
    }
}

class Interface {

    constructor() {
        return
    }

    static showDialog() {
        const dialog = document.querySelector('.dialog');
        const overlay = document.getElementById('overlay');

        dialog.classList.add('open');
        overlay.style.display = 'block';
    }

    static closeDialog() {
        const dialog = document.querySelector('.dialog');
        const overlay = document.getElementById('overlay');

        Interface.resetForm();
        dialog.classList.remove('open');
        overlay.style.display = 'none';
    }

    static createBookCard(book) {
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

        Interface.resetForm();
    }

    static resetForm() {
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

    static readBook(cardDiv) {
        let title = cardDiv.querySelector('#info .title').textContent;
        let index = library.getBooks().findIndex(book => book.title === title);

        if (index !== -1) {
            let buttonForCheck = cardDiv.querySelector('#buttonForCheck');
            //Cambio el valor de read
            if (library.getBooks()[index].read == 'Read') {
                library.getBooks()[index].read = 'Not Read';
                buttonForCheck.textContent = 'Not Read';
            } else {
                library.getBooks()[index].read = 'Read';
                buttonForCheck.textContent = 'Read';
            }
        }
    }

    static deleteBook(cardDiv) {
        let title = cardDiv.querySelector('#info .title').textContent;
        let index = library.getBooks().findIndex(book => book.title === title);

        if (index !== -1) {
            library.getBooks().splice(index, 1);
        }

        cardDiv.remove();
    }

    static initEventListeners() {

        // Open dialog
        document.getElementById('button').addEventListener('click', (event) => {
            event.preventDefault();
            Interface.showDialog();
        })

        // addBook
        document.getElementById('submit').addEventListener('click', (event) => {
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

            library.addBook(title.value, author.value, pages.value, category.value, read);
            Interface.closeDialog();
        })

        // Close dialog
        document.querySelector('.exit').addEventListener('click', (event) => {
            Interface.closeDialog();
        })

        // delete - read/not read
        document.addEventListener('click', (event) => {
            let target = event.target;

            if (target.id === 'buttonForDelete') {
                Interface.deleteBook(target.parentNode.parentNode);
            } else if (target.id === 'buttonForCheck') {
                Interface.readBook(target.parentNode.parentNode);
            }
        })
    }
};

const library = new Library();

Interface.initEventListeners();