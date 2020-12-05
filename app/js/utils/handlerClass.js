System.register([], function (exports_1, context_1) {
    "use strict";
    var injectClass;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("injectClass", injectClass = (selector, addClass, removeClass, haveClass) => {
                if (haveClass) {
                    return $(selector).addClass(addClass);
                }
                else {
                    return $(selector).removeClass(removeClass);
                }
            });
        }
    };
});
