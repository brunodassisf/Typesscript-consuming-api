import { PokemonServiceRandom } from "../services/index";
import { WildImg, WildData, Alert } from "../views/index";

export class ControllerCatch {
  private _service = new PokemonServiceRandom();
  private _wildImg = new WildImg("#wild-img");
  private _wildData = new WildData("#wild-perfil");
  private _alert = new Alert("#alerts-app");

  private wildPokemon = this._service
    .getWhoPokemon()
    .then((pokemon: any) => pokemon);

  async wild(action: string) {
    if (action == "img") {
      this._wildImg.update(await this.wildPokemon);
    } else if (action == "data") {
      this._wildData.update(await this.wildPokemon);
    }
  }

  alert(
    img: string,
    title: string,
    description: string,
    loccationDir: boolean
  ) {
    this._alert.update({ img, title, description, loccationDir });
    setTimeout(() => {
      this._alert.addClass("fadeOut", true);
      this._alert.removeView();
    }, 2000);
  }
}
