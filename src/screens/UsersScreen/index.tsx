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
import Loader from "../../components/UI/Loader";
import { UserStackScreenProps } from "../../navigation/types";
import User from "../../types/User";
import { styles } from "./styles";

const UsersScreen = ({ navigation }: UserStackScreenProps<"Users">) => {
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const users = useSelector((state: AppState) => state.user.filteredUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (users.length > 0) setLoading(false);
  }, [users]);

  useEffect(() => {
    dispatch(userAction.searchUser(input));
  }, [input]);

  const handleOnUserPress = (user: User) => {
    navigation.navigate("UserDetails", { user });
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
        keyExtractor={(user) => user.id.toString()}
      />

      <Loader visible={loading} />
    </View>
  );
};

export default UsersScreen;
