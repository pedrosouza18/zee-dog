const BookImagesTemplate = (imageList, book) => (`
    <ul class="ensaio__lista" id="lista">
        ${imageList.map(BookImageTemplate.bind(null, book)).join('')}
    </ul>
`);
