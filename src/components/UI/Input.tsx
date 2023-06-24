import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";

type InputProps = TextInput["props"];

const Input: FC<InputProps> = (props) => {
  const { style, ...otherProps } = props;
  return <TextInput style={[styles.container, style]} {...otherProps} />;
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "81%",
    borderBottomWidth: 1,
    borderBottomColor: "#BACDDB",
    padding: 6,
    fontSize: 16,
    marginVertical: 4,
  },
});
