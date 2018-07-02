const BookTemplate = ({ title, mainImage, imagePreview, imageList }, index) => (`
    <section class="ensaio" id='ensaio${index}'>
        <article>
            <h3 class="ensaio__titulo">${title}</h3>
            <figure>
                <img src="${mainImage}" alt="${title}" class="ensaio__imagem-principal">
            </figure>
            <div class="ensaio__foto">
                <div class="ensaio__mix" id="ensaio-component" onclick="controller.openBook('ensaio${index}', ${index})">
                    <img src="${imagePreview}" alt="${title}" class="ensaio__imagem-preview">
                    <span class="ensaio__btn">Ver ensaio completo</span>
                </div>
                    ${BookImagesTemplate(imageList, { title, index })}
                </ul>
            </div>
        </article>
        <div class="btn-fechar" id="btn-fechar" onclick="controller.closeBook('ensaio${index}')">
            <span>Fechar ensaio</span>
        </div>
    </section>
`);
