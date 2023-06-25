import { FC } from "react";
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Colors from "../../constants/Colors";

const { width, height } = Dimensions.get("window");

interface LoaderProps {
  visible: boolean;
}

const Loader: FC<LoaderProps> = ({ visible = false }) => {
  return visible ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.violet} />
        <Text style={styles.text}>Loading...</Text>
      </View>
    </SafeAreaView>
  ) : null;
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    width,
    height,
  },
  loader: {
    backgroundColor: Colors.white,
    marginHorizontal: 70,
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  text: {
    marginLeft: 6,
    fontSize: 16,
  },
});
