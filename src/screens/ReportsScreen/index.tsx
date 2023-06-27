import { Text, View } from "react-native";

import { RootDrawerScreenProps } from "../../navigation/types";
import { styles } from "./styles";

const ReportsScreen = ({
  route: { params },
}: RootDrawerScreenProps<"Reports">) => {
  return (
    params && (
      <View style={styles.container}>
        <Text>User {params.user.name}</Text>
      </View>
    )
  );
};

export default ReportsScreen;
