import { useState } from "react";
import { Alert, Keyboard, Text, View } from "react-native";

import Form from "./Form";
import Loader from "../../components/UI/Loader";
import { validateInputs } from "./utils";
import { RootDrawerScreenProps } from "../../navigation/types";
import { InputsModel } from "./types";
import { styles } from "./styles";

const RegistrationScreen = ({
  navigation,
}: RootDrawerScreenProps<"Registration">) => {
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

  const handleBeforeLeavingScreen = (event: any) => {
    let hasUnsavedChanges = false;

    for (const input in inputs) {
      if (inputs[input as keyof InputsModel]) {
        hasUnsavedChanges = true;
        break;
      }
    }

    if (hasUnsavedChanges) {
      Alert.alert(
        "Discard changes?",
        "You have unsaved changes. Are you sure to discard them and leave the screen?",
        [
          { text: "Don't leave", style: "cancel" },
          {
            text: "Discard",
            style: "destructive",
            onPress: () => {
              // TODO: Leave the screen
            },
          },
        ]
      );
    }
  };

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
      // TODO: register
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("Users");
      }, 3300);
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
