System.register([], function (exports_1, context_1) {
    "use strict";
    var spinner;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("spinner", spinner = (selector, show) => {
                const spinner = `
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    `;
                if (show) {
                    return $(selector).append(spinner);
                }
                else {
                    return $(selector).remove();
                }
            });
        }
    };
});
