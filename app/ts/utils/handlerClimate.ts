import { colors } from "../theme/color";

export const getClimate = () => {
  const now = new Date();

    if (now.getHours() >= 0 && now.getHours() < 5)
      return $("#climate").css("background", colors.DAWN);
    else if (now.getHours() >= 6 && now.getHours() < 15)
      return $("#climate").css("background", colors.MOONNG);
    else if (
      now.getHours() >= 16 &&
      now.getHours() < 18
    )
       return $("#climate").css("background", colors.AFTERNOON);
    else return $("#climate").css("background", colors.NIGHT);

};
