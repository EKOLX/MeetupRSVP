import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import RegistrationScreen from "../screens/RegistrationScreen";
import UsersScreen from "../screens/UsersScreen";
import ReportsScreen from "../screens/ReportsScreen";
import { DrawerParamList } from "./types";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: "Registration" }}
        />
        <Drawer.Screen
          name="Users"
          component={UsersScreen}
          options={{ title: "Users" }}
        />
        <Drawer.Screen
          name="Reports"
          component={ReportsScreen}
          options={{ title: "Reports" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
