import { View } from "./View";
import { Pokemon } from "../models/index";

export class WildImg extends View<Pokemon> {
  template(model: Pokemon): string {
    return `
        <div class="pokemon-wild">
          <img class="img-fluid wild-img img-filter" src="${model.img}" alt="${model.name}" />
        </div>
        `;
  }
}

