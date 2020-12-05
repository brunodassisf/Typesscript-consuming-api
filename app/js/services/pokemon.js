System.register([], function (exports_1, context_1) {
    "use strict";
    var baseUrl, randomNumber, getRandomPokemon;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            baseUrl = "https://pokeapi.co/api/v2";
            randomNumber = () => {
                let num = Math.floor(Math.random() * (500 - 1) + 1);
                return num;
            };
            exports_1("getRandomPokemon", getRandomPokemon = fetch(baseUrl + "/pokemon/" + randomNumber(), {
                method: "get",
            }).then((response) => response.json()));
        }
    };
});
