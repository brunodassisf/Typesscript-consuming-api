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
                index_2.injectClass('#show-wild', 'disabled', '', true);
                index_2.spinner(".spinnerLoading", true);
                controllerCatch.wild().then(() => {
                    index_2.spinner(".spinnerLoading", false);
                    index_2.injectClass('#show-wild', '', 'disabled', false);
                });
            });
            $("#show-wild").on("click", (event) => {
                controllerCatch
                    .wild(true)
                    .then(() => index_2.injectClass(".img-filter", "", "img-filter", false));
                $(event.target).parent("div").remove();
            });
        }
    };
});
