import { FC } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({ title, style, onPress }) => {
  return (
    <Pressable style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingVertical: 16,
    width: "81%",
    backgroundColor: "#6D67E4",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: "#FFFFFF",
  },
});
