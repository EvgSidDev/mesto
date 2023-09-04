export class Section {
  constructor(render, container) {
    this._render = render;
    this._container = container;
  }

  render(item) {
    this._render(item);
  }

  addItem(itemElement) {
    this._container.prepend(itemElement);
  }

  clear() {
    this._container.innerHTML = '';
  }
}

export default Section;
