import { FC, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import Colors from "../../constants/Colors";

type InputProps = TextInput["props"] & {
  label: string;
  error?: string;
  testID?: string;
};

const Input: FC<InputProps> = ({
  style,
  returnKeyType = "done",
  label,
  error,
  testID,
  ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View testID={testID} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          style,
          { borderColor: error && !isFocused ? Colors.red : Colors.gray },
        ]}
        placeholderTextColor={Colors.gray}
        returnKeyType={returnKeyType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...otherProps}
      />
      {error && !isFocused && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
  },
  label: {
    fontSize: 13,
    color: Colors.gray,
    marginBottom: 3,
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    padding: 6,
    fontSize: 16,
  },
  error: {
    fontSize: 13,
    color: Colors.red,
    marginTop: 3,
  },
});
