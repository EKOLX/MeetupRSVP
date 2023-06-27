import { useLayoutEffect } from "react";
import { View } from "react-native";

import { UserStackScreenProps } from "../../navigation/types";
import Form from "../../components/Form";
import { mapUserToInputs } from "./utils";
import { styles } from "./styles";

const UserDetailsScreen = ({
  navigation,
  route,
}: UserStackScreenProps<"UserDetails", "Drawer">) => {
  const { params } = route;

  useLayoutEffect(() => {
    if (!navigation || !route) return;

    const drawerNavigator = navigation.getParent("Drawer");
    if (route.name === "UserDetails") {
      drawerNavigator?.setOptions({ headerShown: false });
    }

    return () => {
      // TODO: need to update UI then go back
      drawerNavigator?.setOptions({ headerShown: true });
    };
  }, [navigation, route]);

  return (
    params && (
      <View style={styles.container}>
        <Form editable={false} values={mapUserToInputs(params.user)} />
      </View>
    )
  );
};

export default UserDetailsScreen;
