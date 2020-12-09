export abstract class View<T> {
  protected _selectorHTML: JQuery;

  constructor(element: string) {
    this._selectorHTML = $(element);
  }

  update(model: T) {
    let template = this.template(model);
      this._selectorHTML.html(template);

  }

  addClass(nameClass: string, hasChildren?: boolean) {
    if(hasChildren) {
      this._selectorHTML.children().addClass(nameClass)
    } else {
      this._selectorHTML.addClass(nameClass)
    }
  }

  abstract template(model: T): string;

  removeView() {
    setTimeout(() => {
      this._selectorHTML.children().remove();
    },2000)
  }
}
