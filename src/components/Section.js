export class Section {
  constructor({items, render}, container) {
    this._render = render;
    this._container = container;
    this._items = items;
  }

  setItems(items){
    this._items = items;
  }

  renderElements() {
    this.clear();

    this._items.forEach((item) => {
      this._render(item);
    });
  }

  addItem(itemElement) {
    this._container.prepend(itemElement);
  }

  clear() {
    this._container.innerHTML = '';
  }
}

export default Section;
