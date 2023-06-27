import { Text, View } from "react-native";

import { RootDrawerScreenProps } from "../../navigation/types";
import { styles } from "./styles";

const ReportsScreen = ({}: RootDrawerScreenProps<"Reports">) => {
  return (
    <View style={styles.container}>
      <Text>ReportsScreen</Text>
    </View>
  );
};

export default ReportsScreen;
