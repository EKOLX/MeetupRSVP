import { useState } from "react";
import { Keyboard, Text, View } from "react-native";

import Form from "./Form";
import Loader from "../../components/UI/Loader";
import { InputsModel } from "./types";
import { styles } from "./styles";
import { validateInputs } from "./utils";

const RegistrationScreen = () => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState<InputsModel>({
    name: "",
    age: "",
    birthdate: "",
    profession: "",
    locality: "",
    guestsCount: "",
    address: "",
  });
  const [inputErrors, setInputErrors] = useState<Partial<InputsModel>>({});

  const handleOnInputChange = (text: string, input: keyof InputsModel) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleOnError = (
    errorMessage: string | null,
    input: keyof InputsModel
  ) => {
    setInputErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  const validate = (): boolean => {
    let { valid, inputs: validatedInputs } = validateInputs(inputs);

    if (!valid) {
      for (const input in validatedInputs) {
        const key = input as keyof InputsModel;
        if (validatedInputs[key]) handleOnError(validatedInputs[key], key);
      }
    }

    return valid;
  };

  const handleOnSubmit = () => {
    Keyboard.dismiss();

    if (validate()) {
      setLoading(true);
      console.info("registering...");
      setTimeout(() => setLoading(false), 3300);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Start registration to participate in the meetup
      </Text>

      <Form
        errors={inputErrors}
        onInputChange={handleOnInputChange}
        onError={handleOnError}
        onSubmit={handleOnSubmit}
      />

      <Loader visible={loading} />
    </View>
  );
};

export default RegistrationScreen;
