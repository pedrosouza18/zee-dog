class LookBooksController {
    constructor() {
        this._lookBooks = new LookBooks();
        this._lookBooksView = new LookBooksView(document.querySelector('#ensaios-view'));
        this._message = document.querySelector('.mensagem');
        this._init();
    }

    _init() {
        this._loadLookBooks().then(this._updateLookBooksView.bind(this));
        this._scrollToTopOfPage();
        this._addEventListenerToScrollTopButton();
    }

    _loadLookBooks() {
        return fetch('https://api.jsonbin.io/b/5b3676c5efaed72daeed6e51')
            .then(data => data.json())
    }

    _updateLookBooksView(data) {
        data.forEach(book => {
            const newBook = new Book(book.titulo, book.imagemPrincipal, book.imagemPreview, book.listaImagens);
            this._lookBooks.add(newBook);
        });
        this._lookBooksView.update(this._lookBooks);
    }

    _scrollToTopOfPage() {
        window.onload = function () {
            setTimeout(function () {
                scrollTo(0, 0);
            }, 100);
        }
    }

    _addEventListenerToScrollTopButton() {
        const btnTop = document.querySelector('.btn-top');

        window.onscroll = function () {
            if(window.scrollY > 200) {
                btnTop.style.display = 'block';
            } else {
                btnTop.style.display = 'none';
            }
        }
    }

    openBook(idBook) {
        const book = document.getElementById(idBook);
        const btnClose = book.getElementsByClassName('btn-fechar')[0];

        this._message.style.display = 'block';

        const list = book.getElementsByTagName('ul')[0];

        list.style.display = 'block';
        book.getElementsByClassName('ensaio__mix')[0].style.display = 'none';

        Array.from(book.querySelectorAll('img[data-src]')).forEach((img, idx) => {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.onload = function() {
                img.removeAttribute('data-src');
                book.getElementsByClassName('loader')[idx].style.display = 'none';
            };
        });

        window.onscroll = function () {
            if(window.getComputedStyle(list).display === 'block') {
                btnClose.classList.add("btn-fixo");
                if(window.scrollY >= book.offsetHeight) {
                    btnClose.classList.remove("btn-fixo");
                    btnClose.style.display = 'block';
                }
            }
        }


    }

    closeBook(idBook) {
        const book = document.getElementById(idBook);
        const btnClose = book.getElementsByClassName('btn-fechar')[0];
        this._message.style.display = 'none';
        btnClose.style.display = 'none';
        book.getElementsByTagName('ul')[0].style.display = 'none';
        book.getElementsByClassName('ensaio__mix')[0].style.display = 'block';
        window.scrollTo(0,book.offsetTop - 250);
    }

    fullScreen(idBook, idx) {
        const book = document.getElementById(idBook);
        const imagem = book.querySelectorAll('.ensaio__imagem')[idx];

        if (imagem.requestFullscreen) {
            imagem.requestFullscreen();
        } else if (imagem.msRequestFullscreen) {
            imagem.msRequestFullscreen();
        } else if (imagem.mozRequestFullScreen) {
            imagem.mozRequestFullScreen();
        } else if (imagem.webkitRequestFullscreen) {
            imagem.webkitRequestFullscreen();
        }
    }

    scrollToTop() {
        setTimeout(function () {
            scrollTo(0, 0);
        }, 100);
    }
}
