System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, Alert;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            Alert = class Alert extends View_1.View {
                template(msg) {
                    return `
        <div class="div-alert slideInDown">
        <div class="toast-header">
            <img src="${msg.loccationDir ? `../../assets/img/${msg.img}` : msg.img}" class="rounded img-fluid" style="width: 20px;" alt="...">
                <strong class="pl-2 mr-auto">${msg.title}</strong>
            </div>
            <div class="toast-body">
        ${msg.description}
    </div>
    </div>
    `;
                }
            };
            exports_1("Alert", Alert);
        }
    };
});
