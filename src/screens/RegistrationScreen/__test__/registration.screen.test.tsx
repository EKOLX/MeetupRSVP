import { Text, TextInput } from "react-native";
import { create, act, ReactTestRenderer } from "react-test-renderer";

import RegistrationScreen from "../index";
import Messages from "../../../constants/Messages";
import { RootDrawerScreenProps } from "../../../navigation/types";
import Form from "../../../components/Form";

jest.runAllTimers();
jest.mock("react-redux", () => {
  const ActualReactRedux = jest.requireActual("react-redux");
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn(),
    useSelector: jest.fn().mockImplementation(() => ({})),
  };
});

describe("Registration screen", () => {
  let registrationScreen: ReactTestRenderer;

  beforeEach(() => {
    registrationScreen = create(
      <RegistrationScreen {...({} as RootDrawerScreenProps<"Registration">)} />
    );
  });

  it("should match snapshot", () => {
    const tree = registrationScreen.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should show error messages if Form input fields haven't been filled", () => {
    const buttonSubmit = registrationScreen.root.findByProps({
      testID: "buttonSubmit",
    });
    act(() => buttonSubmit.props.onPress());

    const inputNameTexts = registrationScreen.root
      .findByProps({ testID: "inputName" })
      .findAllByType(Text as any);
    const inputNameErrorText = inputNameTexts[1].props;

    const inputAgeTexts = registrationScreen.root
      .findByProps({ testID: "inputAge" })
      .findAllByType(Text as any);
    const inputAgeErrorText = inputAgeTexts[1].props;

    const inputBirthdateTexts = registrationScreen.root
      .findByProps({ testID: "inputBirthdate" })
      .findAllByType(Text as any);
    const inputBirthdateErrorText = inputBirthdateTexts[1].props;

    const inputProfessionTexts = registrationScreen.root
      .findByProps({ testID: "inputProfession" })
      .findAllByType(Text as any);
    const inputProfessionErrorText = inputProfessionTexts[1].props;

    const inputLocalityTexts = registrationScreen.root
      .findByProps({ testID: "inputLocality" })
      .findAllByType(Text as any);
    const inputLocalityErrorText = inputLocalityTexts[1].props;

    const inputGuestsCountTexts = registrationScreen.root
      .findByProps({ testID: "inputGuestsCount" })
      .findAllByType(Text as any);
    const inputGuestsCountErrorText = inputGuestsCountTexts[1].props;

    const inputAddressTexts = registrationScreen.root
      .findByProps({ testID: "inputAddress" })
      .findAllByType(Text as any);
    const inputAddressErrorText = inputAddressTexts[1].props;

    expect(inputNameTexts.length).toEqual(2);
    expect(inputNameErrorText.children).toEqual(
      Messages.please_input_your_name
    );

    expect(inputAgeTexts.length).toEqual(2);
    expect(inputAgeErrorText.children).toEqual(Messages.please_input_your_age);

    expect(inputBirthdateTexts.length).toEqual(2);
    expect(inputBirthdateErrorText.children).toEqual(
      Messages.please_input_your_date_of_birth
    );

    expect(inputProfessionTexts.length).toEqual(2);
    expect(inputProfessionErrorText.children).toEqual(
      Messages.please_input_your_profession
    );

    expect(inputLocalityTexts.length).toEqual(2);
    expect(inputLocalityErrorText.children).toEqual(
      Messages.please_input_your_locality
    );

    expect(inputGuestsCountTexts.length).toEqual(2);
    expect(inputGuestsCountErrorText.children).toEqual(
      Messages.please_input_number_of_guests
    );

    expect(inputAddressTexts.length).toEqual(2);
    expect(inputAddressErrorText.children).toEqual(
      Messages.please_input_your_address
    );
  });

  it("shouldn't have any errors in Form after inputs filled in", () => {
    const buttonSubmit = registrationScreen.root.findByProps({
      testID: "buttonSubmit",
    });
    const inputName = registrationScreen.root.findByProps({
      testID: "inputName",
    });
    const inputAge = registrationScreen.root.findByProps({
      testID: "inputAge",
    });
    const inputBirthdate = registrationScreen.root.findByProps({
      testID: "inputBirthdate",
    });
    const inputProfession = registrationScreen.root.findByProps({
      testID: "inputProfession",
    });
    const inputLocality = registrationScreen.root.findByProps({
      testID: "inputLocality",
    });
    const inputGuestsCount = registrationScreen.root.findByProps({
      testID: "inputGuestsCount",
    });
    const inputAddress = registrationScreen.root.findByProps({
      testID: "inputAddress",
    });

    act(() => {
      inputName.props.onChangeText("EL Khan");
      inputAge.props.onChangeText("33");
      inputBirthdate.props.onChangeText("22.06.2002");
      inputProfession.props.onChangeText("Employed");
      inputLocality.props.onChangeText("Prague");
      inputGuestsCount.props.onChangeText("1");
      inputAddress.props.onChangeText("Elm Street");
    });

    const form = registrationScreen.root.findByType(Form);

    act(() => buttonSubmit.props.onPress());

    expect(form.props.errors).toEqual({});
  });
});
