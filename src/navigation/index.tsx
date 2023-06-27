import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { RootDrawerParamList, UserStackParamList } from "./types";
import RegistrationScreen from "../screens/RegistrationScreen";
import UsersScreen from "../screens/UsersScreen";
import UserDetailsScreen from "../screens/UserDetailsScreen";
import ReportsScreen from "../screens/ReportsScreen";

const Drawer = createDrawerNavigator<RootDrawerParamList>();
const Stack = createStackNavigator<UserStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator id="Drawer">
        <Drawer.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: "Registration" }}
        />
        <Drawer.Screen
          name="UserRoot"
          component={UserStackNavigator}
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

function UserStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Users"
        component={UsersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ title: "User Details" }}
      />
    </Stack.Navigator>
  );
}
