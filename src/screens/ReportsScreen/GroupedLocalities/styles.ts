import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 22,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    padding: 4,
  },
  header: {
    fontSize: 16,
  },
});
