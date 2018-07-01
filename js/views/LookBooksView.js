class LookBooksView {

    constructor(mountPoint) {
        this._mountPoint = mountPoint;
    }

    render(list) {
        return `
        ${ list.lookBooks.map((item, idx) => {

            return `
            <section class="ensaio" id='ensaio${idx}'>
                <article>
                    <h3 class="ensaio__titulo">${item.title}</h3>
                    <figure>
                        <img src="${item.mainImage}" alt="${item.title}" class="ensaio__imagem-principal">
                    </figure>
                    <div class="ensaio__foto">
                        <div class="ensaio__mix" id="ensaio-component" onclick="controller.openBook('ensaio${idx}')">
                            <img src="${item.imagePreview}" alt="${item.title}" class="ensaio__imagem-preview">
                            <span class="ensaio__btn">Ver ensaio completo</span>
                        </div>
                        <ul class="ensaio__lista" id="lista">
                            ${
                                item.imageList.map((imagem, idxImagem) => {
                                    return `
                                    <li class="item-imagem">
                                        <div class="loader"></div>
                                        <figure class="ensaio__box">
                                            <img class="ensaio__imagem" data-src="${imagem}" id="${idxImagem}" alt="${item.title}" onclick="controller.fullScreen('ensaio${idx}', ${idxImagem})">
                                        </figure>
                                    </li>
                                    `;
                                })
                            }
                        </ul>
                    </div>
                </article>
                <div class="btn-fechar" id="btn-fechar" onclick="controller.closeBook('ensaio${idx}')">
                    <span>Fechar ensaio</span>
                </div>
            </section>`;
        }).join(' ')}
        `;
    }

    update(list) {
        this._mountPoint.innerHTML = this.render(list);
    }
}
