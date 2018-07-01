class LookBooksView {
    constructor(mountPoint) {
        this._mountPoint = mountPoint;
    }

    render(list) {
        return list.lookBooks.map(BookTemplate).join(' ')
    }

    update(list) {
        this._mountPoint.innerHTML = this.render(list);
    }
}
