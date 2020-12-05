System.register([], function (exports_1, context_1) {
    "use strict";
    var Pokemon;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Pokemon = class Pokemon {
                constructor(name, img, skills, stats, types) {
                    this.name = name;
                    this.img = img;
                    this.skills = skills;
                    this.stats = stats;
                    this.types = types;
                    this.randomNumber = () => {
                        let num = Math.floor(Math.random() * (500 - 1) + 1);
                        return num;
                    };
                }
                random() {
                    return fetch("https://pokeapi.co/api/v2/pokemon/" + this.randomNumber())
                        .then((response) => {
                        return response.json();
                    })
                        .then((json) => {
                        return json;
                    })
                        .catch((erro) => console.log(erro));
                }
            };
            exports_1("Pokemon", Pokemon);
        }
    };
});
