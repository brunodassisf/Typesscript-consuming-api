System.register(["../utils/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, baseUrl, PokemonServiceRandom;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            baseUrl = "https://pokeapi.co/api/v2";
            PokemonServiceRandom = class PokemonServiceRandom {
                getWhoPokemon() {
                    return fetch(baseUrl + "/pokemon/" + index_1.randomNumber())
                        .then((res) => res.json())
                        .then((dados) => {
                        let pokemon = {
                            name: dados.name,
                            img: dados.sprites.other.dream_world.front_default,
                            types: dados.types,
                            stats: dados.stats,
                            abilities: dados.abilities
                        };
                        console.log(pokemon);
                        return pokemon;
                    })
                        .catch((erro) => console.log(erro));
                }
            };
            exports_1("PokemonServiceRandom", PokemonServiceRandom);
        }
    };
});
