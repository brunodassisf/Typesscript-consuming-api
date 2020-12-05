System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, WildData;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            WildData = class WildData extends View_1.View {
                template(model) {
                    return `
        <div>
            <div>${model.name}</div>
            <div class="d-flex align-items-center">
                <ul class="list-group">${this.listStats(model.stats)}</ul>
                <ul class="list-group">${this.listTypes(model.types)}</ul>
                <ul class="list-group">${this.listAbilitities(model.abilities)}</ul>
            </div>
        </div> 
    `;
                }
                listStats(item) {
                    let list = "";
                    item.map((index) => (list += "<li class='list-group-item w-100'>" + index.stat.name + "  " + index.base_stat + "</li>"));
                    return list;
                }
                listTypes(item) {
                    let list = "";
                    item.map((index) => (list += "<li class='list-group-item w-100'>" + index.type.name + "</li>"));
                    return list;
                }
                listAbilitities(item) {
                    let list = "";
                    item.map((index) => (list += "<li class='list-group-item w-100'>" + index.ability.name + "</li>"));
                    return list;
                }
            };
            exports_1("WildData", WildData);
        }
    };
});
