import { createSwitchNavigator } from "react-navigation";
import auth from "./auth";
import privateRoute from "./privateRoute";

const route = createSwitchNavigator({
  auth,
  privateRoute
});

export default route;
