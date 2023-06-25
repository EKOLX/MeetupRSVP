import { FC } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import { Props } from "./types";
import { styles } from "./styles";

const Form: FC<Props> = ({ errors, onInputChange, onError, onSubmit }) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          label="Name"
          placeholder="Jack"
          error={errors.name}
          onFocus={() => onError(null, "name")}
          onChangeText={(text) => onInputChange(text, "name")}
        />
        <Input
          label="Age"
          placeholder="33"
          inputMode="numeric"
          error={errors.age}
          onFocus={() => onError(null, "age")}
          onChangeText={(text) => onInputChange(text, "age")}
        />
        <Input
          label="Date of Birth"
          placeholder="22.06.1988"
          inputMode="decimal"
          error={errors.birthdate}
          onFocus={() => onError(null, "birthdate")}
          onChangeText={(text) => onInputChange(text, "birthdate")}
        />
        <Input
          label="Profession"
          placeholder="Employed | Student"
          error={errors.profession}
          onFocus={() => onError(null, "profession")}
          onChangeText={(text) => onInputChange(text, "profession")}
        />
        <Input
          label="Locality"
          placeholder="Dubai"
          error={errors.locality}
          onFocus={() => onError(null, "locality")}
          onChangeText={(text) => onInputChange(text, "locality")}
        />
        <Input
          label="Number of Guests"
          placeholder="0-2"
          inputMode="numeric"
          error={errors.guestsCount}
          onFocus={() => onError(null, "guestsCount")}
          onChangeText={(text) => onInputChange(text, "guestsCount")}
        />
        <Input
          style={styles.multiline}
          label="Address"
          placeholder="Dzhorat street"
          multiline
          numberOfLines={4}
          maxLength={50}
          textAlignVertical="top"
          blurOnSubmit
          error={errors.address}
          onFocus={() => onError(null, "address")}
          onChangeText={(text) => onInputChange(text, "address")}
        />
      </ScrollView>

      <Button style={styles.submit} title="Submit" onPress={onSubmit} />
    </KeyboardAvoidingView>
  );
};

export default Form;
