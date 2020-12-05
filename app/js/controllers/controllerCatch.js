System.register(["../services/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var index_1, index_2, ControllerCatch;
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
            ControllerCatch = class ControllerCatch {
                constructor() {
                    this._service = new index_1.PokemonServiceRandom();
                    this._wildImg = new index_2.WildImg("#wild-img");
                    this._wildData = new index_2.WildData("#wild-perfil");
                    this.wildPokemon = this._service
                        .getWhoPokemon()
                        .then((pokemon) => pokemon);
                }
                wild(showStatus) {
                    return __awaiter(this, void 0, void 0, function* () {
                        this._wildImg.update(yield this.wildPokemon);
                        if (showStatus) {
                            this._wildData.update(yield this.wildPokemon);
                        }
                    });
                }
            };
            exports_1("ControllerCatch", ControllerCatch);
        }
    };
});
