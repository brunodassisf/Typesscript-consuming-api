export abstract class View<T> {
  protected _selectorHTML: JQuery;

  constructor(element: string) {
    this._selectorHTML = $(element);
  }

  update(model: T) {
      let template = this.template(model)
      this._selectorHTML.html(template)
  }

  abstract template(model: T): string;
}
