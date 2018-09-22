import { createSwitchNavigator } from "react-navigation";
import auth from "./auth";
import privateRoute from "./privateRoute";

const route = createSwitchNavigator({
  auth,
  app: privateRoute
});

export default route;
