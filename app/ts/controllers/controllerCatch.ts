import { PokemonServiceRandom } from "../services/index";
import { injectClass } from "../utils/index";
import { WildImg, WildData } from "../views/index";

export class ControllerCatch {
  private _service = new PokemonServiceRandom();
  private _wildImg = new WildImg("#wild-img");
  private _wildData = new WildData("#wild-perfil");

  private wildPokemon = this._service
    .getWhoPokemon()
    .then((pokemon: any) => pokemon);

  async wild(showStatus?: boolean) {
    this._wildImg.update(await this.wildPokemon);
    if (showStatus) {
      this._wildData.update(await this.wildPokemon);
    }
  }
}
