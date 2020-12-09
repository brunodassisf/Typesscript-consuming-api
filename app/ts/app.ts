import { ControllerCatch } from "./controllers/index";
import { injectClass, spinner, getClimate, showAlert } from "./utils/index";

const controllerCatch = new ControllerCatch();
jQuery(() => {
  getClimate();
  injectClass("#show-wild", "disabled", "", true);
  spinner(".spinnerLoading", true);
  controllerCatch.wild("img").then(() => {
    spinner(".spinnerLoading", false);
    injectClass("#show-wild", "", "disabled", false);
  });
});

$("#show-wild").on("click", (event) => {
  controllerCatch.wild("data").then(() => {
    injectClass(".img-filter", "", "img-filter", false);
    injectClass("#pokeball-catch", "", "d-none", false);
  });
  $(event.target).parent("div").remove();
  injectClass("#pokeball-catch", "", "d-none", false);
});

$("#pokeball-catch").on("click", (event) => {
  let name = $(".info-wild div p").text();
  controllerCatch.alert(
    "pokeball.png",
    ` ${name} Cacth!`,
    "Pokemon Catch success",
    true
  );
  $(event.target).parent("a").remove();
});
