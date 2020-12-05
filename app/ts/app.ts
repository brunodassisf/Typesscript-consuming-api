import { ControllerCatch } from "./controllers/index";
import { injectClass, spinner } from "./utils/index";

const controllerCatch = new ControllerCatch();
jQuery(() => {
  injectClass('#show-wild', 'disabled', '', true);
  spinner(".spinnerLoading", true);
  controllerCatch.wild().then(() => {
    spinner(".spinnerLoading", false);
    injectClass('#show-wild', '', 'disabled', false);
  });
});

$("#show-wild").on("click", (event) => {
  controllerCatch
    .wild(true)
    .then(() => injectClass(".img-filter", "", "img-filter", false));
  $(event.target).parent("div").remove();
});
