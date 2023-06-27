import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 32,
  },
  searchInput: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.gray,
    padding: 6,
  },
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: Colors.violet,
    paddingVertical: 6,
  },
  usersContainer: {
    width: "100%",
    marginTop: 22,
  },
});
