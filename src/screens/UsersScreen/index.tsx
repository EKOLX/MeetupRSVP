import { useEffect } from "react";
import { FlatList, ListRenderItem, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import * as userAction from "../../store/actions/user.action";
import Colors from "../../constants/Colors";
import User from "../../types/User";
import { styles } from "./styles";

const UsersScreen = () => {
  const users = useSelector((state: AppState) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.getAllUsers());
  }, [dispatch]);

  const renderUser: ListRenderItem<User> = ({ item: user }) => {
    return (
      <View style={styles.userItem}>
        <Text>{user.name}</Text>
        <Text>{user.locality}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholderTextColor={Colors.gray}
        placeholder="Search..."
      />

      <FlatList
        style={styles.usersContainer}
        showsVerticalScrollIndicator={false}
        data={users}
        renderItem={renderUser}
      />
    </View>
  );
};

export default UsersScreen;
