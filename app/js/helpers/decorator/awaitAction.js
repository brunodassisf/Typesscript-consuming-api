System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function awaitAction() {
        return function (target, propertyKey, descriptior) {
            const origin = descriptior.value;
            descriptior.value = function (...args) {
                console.log(origin);
                const callback = origin.apply(this, args);
                return callback;
            };
            return descriptior;
        };
    }
    exports_1("awaitAction", awaitAction);
    return {
        setters: [],
        execute: function () {
        }
    };
});
