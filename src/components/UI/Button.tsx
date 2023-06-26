import { FC } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

import Colors from "../../constants/Colors";

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  testID?: string;
  title: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({ style, testID, title, onPress }) => {
  return (
    <Pressable
      style={[styles.container, style]}
      testID={testID}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 16,
    width: "100%",
    backgroundColor: Colors.violet,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: Colors.white,
  },
});
