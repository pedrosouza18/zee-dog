class LookBooks {
    constructor() {
        this._lookBooks = [];
    }

    get lookBooks() {
        return [].concat(this._lookBooks);
    }

    add(book) {
        this._lookBooks.push(book);
    }
}
