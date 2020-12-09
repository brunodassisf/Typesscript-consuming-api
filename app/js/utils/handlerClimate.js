System.register(["../theme/color"], function (exports_1, context_1) {
    "use strict";
    var color_1, getClimate;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (color_1_1) {
                color_1 = color_1_1;
            }
        ],
        execute: function () {
            exports_1("getClimate", getClimate = () => {
                const now = new Date();
                if (now.getHours() >= 0 && now.getHours() < 5)
                    return $("#climate").css("background", color_1.colors.DAWN);
                else if (now.getHours() >= 6 && now.getHours() < 15)
                    return $("#climate").css("background", color_1.colors.MOONNG);
                else if (now.getHours() >= 16 &&
                    now.getHours() < 18)
                    return $("#climate").css("background", color_1.colors.AFTERNOON);
                else
                    return $("#climate").css("background", color_1.colors.NIGHT);
            });
        }
    };
});
