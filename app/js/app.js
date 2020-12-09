System.register(["./controllers/index", "./utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, controllerCatch;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            controllerCatch = new index_1.ControllerCatch();
            jQuery(() => {
                index_2.getClimate();
                index_2.injectClass("#show-wild", "disabled", "", true);
                index_2.spinner(".spinnerLoading", true);
                controllerCatch.wild("img").then(() => {
                    index_2.spinner(".spinnerLoading", false);
                    index_2.injectClass("#show-wild", "", "disabled", false);
                });
            });
            $("#show-wild").on("click", (event) => {
                controllerCatch.wild("data").then(() => {
                    index_2.injectClass(".img-filter", "", "img-filter", false);
                    index_2.injectClass("#pokeball-catch", "", "d-none", false);
                });
                $(event.target).parent("div").remove();
                index_2.injectClass("#pokeball-catch", "", "d-none", false);
            });
            $("#pokeball-catch").on("click", (event) => {
                let name = $(".info-wild div p").text();
                controllerCatch.alert("pokeball.png", ` ${name} Cacth!`, "Pokemon Catch success", true);
                $(event.target).parent("a").remove();
            });
        }
    };
});
