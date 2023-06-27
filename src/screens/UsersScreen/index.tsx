import { useEffect, useState } from "react";
import {
  FlatList,
  ListRenderItem,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import * as userAction from "../../store/actions/user.action";
import Colors from "../../constants/Colors";
import { RootDrawerScreenProps } from "../../navigation/types";
import User from "../../types/User";
import { styles } from "./styles";

const UsersScreen = ({ navigation }: RootDrawerScreenProps<"Users">) => {
  const [input, setInput] = useState("");
  const users = useSelector((state: AppState) => state.user.filteredUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(userAction.searchUser(input));
  }, [input]);

  const handleOnUserPress = (user: User) => {
    navigation.navigate("Reports", { user });
  };

  const renderUser: ListRenderItem<User> = ({ item: user }) => {
    return (
      <Pressable
        style={styles.userItem}
        onPress={() => handleOnUserPress(user)}
      >
        <Text>{user.name}</Text>
        <Text>{user.locality}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        style={styles.searchInput}
        placeholderTextColor={Colors.gray}
        placeholder="Search..."
        onChangeText={setInput}
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
