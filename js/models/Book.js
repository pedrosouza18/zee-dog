class Book {
    constructor(title, mainImage, imagePreview, imageList) {
        this._title = title;
        this. _mainImage = mainImage;
        this._imagePreview = imagePreview;
        this._imageList = imageList;
    }

    get title() {
        return this._title;
    }

    get mainImage() {
        return this._mainImage;
    }

    get imagePreview() {
        return this._imagePreview;
    }

    get imageList() {
        return [].concat(this._imageList);
    }
}
