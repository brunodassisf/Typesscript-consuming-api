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
                constructor() {
                    super(...arguments);
                    this.arrStatsIcons = [
                        ["fas fa-heart"],
                        ["fas fa-fist-raised"],
                        ["fas fa-shield-alt"],
                        ["fas fa-fist-raised", "fas fa-star"],
                        ["fas fa-shield-alt", "fas fa-star"],
                        ["fas fa-tachometer-alt"],
                    ];
                }
                template(model) {
                    return `
        <div class="info-wild">
            <div>
              <p>${model.name}</p>
            </div>
            <div class="d-md-flex">
              <ul class="list-group stats w-50 border-0">${this.listStats(model.stats)}</ul>
              <div class="typesAndAbilities w-50">
                <div class="types"><h5>${model.types.length > 1 ? 'Types' : 'Type'}</h5><div>${this.listTypes(model.types)}</div></div>
                <div class="abilities">${this.listAbilitities(model.abilities)}</div>
              </div>
            </div>
        </div> 
    `;
                }
                listStats(item) {
                    let list = "";
                    for (let i = 0; item.length > i; i++) {
                        item[i].icon = this.arrStatsIcons[i];
                    }
                    item.map((index) => {
                        if (index.icon.length > 1)
                            list += '<li class="list-group-item w-100 border-0"><div class="d-flex justify-content-between align-items-center" style="width: 15%"><i class="' + index.icon[0] + ' ' + index.stat.name + '' + index.icon.length + '"></i><i class="' + index.icon[1] + '"></i><span>' + index.base_stat + '</span></div><div class="progress ' + index.stat.name + '"><div class="progress-bar" role="progressbar" style="width:' + index.base_stat + 'px" aria-valuenow="' + index.base_stat + '" aria-valuemin="0" aria-valuemax="160"></div></div></li>';
                        else
                            list += '<li class="list-group-item w-100 border-0"><div class="d-flex justify-content-between align-items-center" style="width: 15%"><i class="' + index.icon + '"></i><span>' + index.base_stat + '</span></div><div class="progress ' + index.stat.name + '"><div class="progress-bar" role="progressbar" style="width:' + index.base_stat + 'px" aria-valuenow="' + index.base_stat + '" aria-valuemin="0" aria-valuemax="160"></div></div></li>';
                    });
                    return list;
                }
                listTypes(item) {
                    let list = "";
                    item.map((index) => (list += "<span>" + index.type.name + "</span>"));
                    return list;
                }
                listAbilitities(item) {
                    let list = "";
                    item.map((index) => (list += "<div class=''>" + index.ability.name + "</div>"));
                    return list;
                }
            };
            exports_1("WildData", WildData);
        }
    };
});
