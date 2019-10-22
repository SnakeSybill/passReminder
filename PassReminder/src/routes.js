import login from "./screens/login/login.js";
import main from "./screens/main/main.js";
import visualizar from "./screens/visualizar/visualizar.js";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const routes = createStackNavigator({
    main,
    login,
    visualizar,
});

export default createAppContainer(routes);