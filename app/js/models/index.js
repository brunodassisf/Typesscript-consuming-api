System.register(["./Pokemon", "./Mensagem"], function (exports_1, context_1) {
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
            function (Pokemon_1_1) {
                exportStar_1(Pokemon_1_1);
            },
            function (Mensagem_1_1) {
                exportStar_1(Mensagem_1_1);
            }
        ],
        execute: function () {
        }
    };
});
