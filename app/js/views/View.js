System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(element) {
                    this._selectorHTML = $(element);
                }
                update(model) {
                    let template = this.template(model);
                    this._selectorHTML.html(template);
                }
            };
            exports_1("View", View);
        }
    };
});
