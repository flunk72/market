import { NavigationProps } from "../../interfaces/navigation";
import { FavoritIcon, BasketIcon } from "../icons";

export const favoritAndOrder: NavigationProps[] = [{
  path: "/favorit",
  icon: FavoritIcon,
  id: 1
}, {
  path: "/basket",
  icon: BasketIcon,
  id: 2,
}]