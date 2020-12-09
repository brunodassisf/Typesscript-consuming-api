System.register(["./handlerRandomNumber", "./handlerSpinner", "./handlerClass", "./handlerClimate", "./handlerAlert"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (handlerRandomNumber_1_1) {
                exportStar_1(handlerRandomNumber_1_1);
            },
            function (handlerSpinner_1_1) {
                exportStar_1(handlerSpinner_1_1);
            },
            function (handlerClass_1_1) {
                exportStar_1(handlerClass_1_1);
            },
            function (handlerClimate_1_1) {
                exportStar_1(handlerClimate_1_1);
            },
            function (handlerAlert_1_1) {
                exportStar_1(handlerAlert_1_1);
            }
        ],
        execute: function () {
        }
    };
});
