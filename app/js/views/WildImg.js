System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, WildImg;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            WildImg = class WildImg extends View_1.View {
                template(model) {
                    return `
        <div class="pokemon-wild">
            <img class="img-fluid img-filter" src="${model.img}" alt="${model.name}" />
        </div>
        
        `;
                }
            };
            exports_1("WildImg", WildImg);
        }
    };
});
