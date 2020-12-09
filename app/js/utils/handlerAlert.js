System.register([], function (exports_1, context_1) {
    "use strict";
    var alert, showAlert;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("alert", alert = (imgAlert, titleAlert) => {
                var _a;
                const dirImg = "../../assets/img/";
                const div = document.createElement("div");
                div.classList.add("div-alert", "slideInDown");
                div.innerHTML = `
    <div class="toast-header">
    <img src="${dirImg + imgAlert}" class="rounded img-fluid" style="width: 20px;" alt="...">
    <strong class="mr-auto pl-3">${titleAlert}</strong>
    <small class="text-muted">just now</small>
    </div>
    <div class="toast-body">
    See? Just like this.
    </div>`;
                return (_a = document.querySelector('#alerts-app')) === null || _a === void 0 ? void 0 : _a.appendChild(div);
            });
            exports_1("showAlert", showAlert = (img, title) => {
                const msg = alert(img, title);
                console.log(msg);
                setTimeout(() => {
                    msg === null || msg === void 0 ? void 0 : msg.classList.add("fadeOut");
                    setTimeout(() => { msg === null || msg === void 0 ? void 0 : msg.remove(); }, 2000);
                }, 2000);
            });
        }
    };
});
