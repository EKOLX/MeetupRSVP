import { FC } from "react";
import { ScrollView } from "react-native";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import { Props } from "./types";
import { styles } from "./styles";

const Form: FC<Props> = ({ errors, onInputChange, onError, onSubmit }) => {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Input
          label="Name"
          error={errors.name}
          onFocus={() => onError(null, "name")}
          onChangeText={(text) => onInputChange(text, "name")}
        />
        <Input
          label="Age"
          error={errors.age}
          onFocus={() => onError(null, "age")}
          onChangeText={(text) => onInputChange(text, "age")}
        />
        <Input
          label="Date of Birth"
          error={errors.birthdate}
          onFocus={() => onError(null, "birthdate")}
          onChangeText={(text) => onInputChange(text, "birthdate")}
        />
        <Input
          label="Profession"
          error={errors.profession}
          onFocus={() => onError(null, "profession")}
          onChangeText={(text) => onInputChange(text, "profession")}
        />
        <Input
          label="Locality"
          error={errors.locality}
          onFocus={() => onError(null, "locality")}
          onChangeText={(text) => onInputChange(text, "locality")}
        />
        <Input
          label="Number of Guests"
          error={errors.guestsCount}
          onFocus={() => onError(null, "guestsCount")}
          onChangeText={(text) => onInputChange(text, "guestsCount")}
        />
        <Input
          label="Address"
          error={errors.address}
          onFocus={() => onError(null, "address")}
          onChangeText={(text) => onInputChange(text, "address")}
        />
      </ScrollView>

      <Button style={styles.submit} title="Submit" onPress={onSubmit} />
    </>
  );
};

export default Form;
