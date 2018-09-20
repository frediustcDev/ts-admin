//in App route accessed after login/registration
import { createBottomTabNavigator } from "react-navigation";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Events from "../screens/Events";
import WishList from "../screens/WishList";

const route = createBottomTabNavigator({
  home: Home,
  cart: Cart,
  events: Events,
  wishlist: WishList
});

export default route;
