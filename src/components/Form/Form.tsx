import { FC } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

import Input from "../UI/Input";
import Button from "../UI/Button";
import { Props } from "./types";
import { styles } from "./styles";

const Form: FC<Props> = ({
  editable = true,
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
          editable={editable}
          value={values.name}
          error={errors?.name}
          onFocus={onError ? () => onError(null, "name") : undefined}
          onChangeText={
            onInputChange ? (text) => onInputChange(text, "name") : undefined
          }
        />
        <Input
          testID="inputAge"
          label="Age"
          placeholder="33"
          inputMode="numeric"
          editable={editable}
          value={values.age}
          error={errors?.age}
          onFocus={onError ? () => onError(null, "age") : undefined}
          onChangeText={
            onInputChange ? (text) => onInputChange(text, "age") : undefined
          }
        />
        <Input
          testID="inputBirthdate"
          label="Date of Birth"
          placeholder="22.06.1988"
          inputMode="decimal"
          editable={editable}
          value={values.birthdate}
          error={errors?.birthdate}
          onFocus={onError ? () => onError(null, "birthdate") : undefined}
          onChangeText={
            onInputChange
              ? (text) => onInputChange(text, "birthdate")
              : undefined
          }
        />
        <Input
          testID="inputProfession"
          label="Profession"
          placeholder="Employed | Student"
          editable={editable}
          value={values.profession}
          error={errors?.profession}
          onFocus={onError ? () => onError(null, "profession") : undefined}
          onChangeText={
            onInputChange
              ? (text) => onInputChange(text, "profession")
              : undefined
          }
        />
        <Input
          testID="inputLocality"
          label="Locality"
          placeholder="Dubai"
          editable={editable}
          value={values.locality}
          error={errors?.locality}
          onFocus={onError ? () => onError(null, "locality") : undefined}
          onChangeText={
            onInputChange
              ? (text) => onInputChange(text, "locality")
              : undefined
          }
        />
        <Input
          testID="inputGuestsCount"
          label="Number of Guests"
          placeholder="0-2"
          inputMode="numeric"
          editable={editable}
          value={values.guestsCount}
          error={errors?.guestsCount}
          onFocus={onError ? () => onError(null, "guestsCount") : undefined}
          onChangeText={
            onInputChange
              ? (text) => onInputChange(text, "guestsCount")
              : undefined
          }
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
          editable={editable}
          value={values.address}
          error={errors?.address}
          onFocus={onError ? () => onError(null, "address") : undefined}
          onChangeText={
            onInputChange ? (text) => onInputChange(text, "address") : undefined
          }
        />
      </ScrollView>

      {editable && (
        <Button
          style={styles.submit}
          testID="buttonSubmit"
          title="Submit"
          onPress={onSubmit}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default Form;
