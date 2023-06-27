import { FC } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import { Props } from "./types";
import { styles } from "./styles";

const Form: FC<Props> = ({
  values,
  errors,
  onInputChange,
  onError,
  onSubmit,
}) => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          testID="inputName"
          label="Name"
          placeholder="Jack"
          value={values.name}
          error={errors.name}
          onFocus={() => onError(null, "name")}
          onChangeText={(text) => onInputChange(text, "name")}
        />
        <Input
          testID="inputAge"
          label="Age"
          placeholder="33"
          inputMode="numeric"
          value={values.age}
          error={errors.age}
          onFocus={() => onError(null, "age")}
          onChangeText={(text) => onInputChange(text, "age")}
        />
        <Input
          testID="inputBirthdate"
          label="Date of Birth"
          placeholder="22.06.1988"
          inputMode="decimal"
          value={values.birthdate}
          error={errors.birthdate}
          onFocus={() => onError(null, "birthdate")}
          onChangeText={(text) => onInputChange(text, "birthdate")}
        />
        <Input
          testID="inputProfession"
          label="Profession"
          placeholder="Employed | Student"
          value={values.profession}
          error={errors.profession}
          onFocus={() => onError(null, "profession")}
          onChangeText={(text) => onInputChange(text, "profession")}
        />
        <Input
          testID="inputLocality"
          label="Locality"
          placeholder="Dubai"
          value={values.locality}
          error={errors.locality}
          onFocus={() => onError(null, "locality")}
          onChangeText={(text) => onInputChange(text, "locality")}
        />
        <Input
          testID="inputGuestsCount"
          label="Number of Guests"
          placeholder="0-2"
          inputMode="numeric"
          value={values.guestsCount}
          error={errors.guestsCount}
          onFocus={() => onError(null, "guestsCount")}
          onChangeText={(text) => onInputChange(text, "guestsCount")}
        />
        <Input
          testID="inputAddress"
          style={styles.multiline}
          label="Address"
          placeholder="Elm Street"
          multiline
          numberOfLines={2}
          maxLength={50}
          textAlignVertical="top"
          blurOnSubmit
          value={values.address}
          error={errors.address}
          onFocus={() => onError(null, "address")}
          onChangeText={(text) => onInputChange(text, "address")}
        />
      </ScrollView>

      <Button
        style={styles.submit}
        testID="buttonSubmit"
        title="Submit"
        onPress={onSubmit}
      />
    </KeyboardAvoidingView>
  );
};

export default Form;
