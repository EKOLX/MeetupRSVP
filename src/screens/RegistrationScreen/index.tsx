import { useState } from "react";
import { Alert, Keyboard, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../../store/AppState";
import * as userAction from "../../store/actions/user.action";
import Form from "../../components/Form";
import Loader from "../../components/UI/Loader";
import { mapInputsToUser, validateInputs } from "./utils";
import { RootDrawerScreenProps } from "../../navigation/types";
import { InputsModel } from "./types";
import { styles } from "./styles";

const initialInputValues = {
  name: "",
  age: "",
  birthdate: "",
  profession: "",
  locality: "",
  guestsCount: "",
  address: "",
};

const RegistrationScreen = ({
  navigation,
}: RootDrawerScreenProps<"Registration">) => {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState<InputsModel>(initialInputValues);
  const [inputErrors, setInputErrors] = useState<Partial<InputsModel>>({});
  const allUsers = useSelector((state: AppState) => state.user.users); // TODO: temporary
  const dispatch = useDispatch();

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
        setInputs(initialInputValues);
        dispatch(
          userAction.addUser(mapInputsToUser(inputs, allUsers.length + 1))
        );
        navigation.navigate("UserRoot");
      }, 3300);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Start registration to participate in the meetup
      </Text>

      <Form
        values={inputs}
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
