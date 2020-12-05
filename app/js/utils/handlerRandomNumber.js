System.register([], function (exports_1, context_1) {
    "use strict";
    var randomNumber;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("randomNumber", randomNumber = () => {
                let num = Math.floor(Math.random() * (500 - 1) + 1);
                return num;
            });
        }
    };
});
