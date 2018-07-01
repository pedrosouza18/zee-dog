const BookImageTemplate = (book, image, index) => (`
    <li class="item-imagem">
        <div class="loader"></div>
        <figure class="ensaio__box">
            <img
                class="ensaio__imagem"
                data-src="${image}"
                id="${index}"
                alt="${book.title}" onclick="controller.fullScreen('ensaio${book.index}', ${index})">
        </figure>
    </li>
`);
