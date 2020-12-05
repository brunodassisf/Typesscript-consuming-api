import { View } from "./View";
import { Pokemon } from "../models/index";

export class WildData extends View<Pokemon> {
  template(model: Pokemon): string {
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

  listStats(item: []) {
    let list = "";
    item.map(
      (index: any) =>
        (list += "<li class='list-group-item w-100'>" + index.stat.name + "  " + index.base_stat + "</li>")
    );
    return list;
  }

  listTypes(item: []) {
    let list = "";
    item.map(
      (index: any) =>
        (list += "<li class='list-group-item w-100'>" + index.type.name + "</li>")
    );
    return list;
  }

  listAbilitities(item: []) {
    let list = "";
    item.map(
      (index: any) =>
        (list += "<li class='list-group-item w-100'>" + index.ability.name + "</li>")
    );
    return list;
  }


}
