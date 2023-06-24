import { StyleSheet, Text, View } from "react-native";

const UsersScreen = () => (
  <View style={styles.container}>
    <Text>Users Screen</Text>
  </View>
);

export default UsersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
