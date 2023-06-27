import { InputsModel } from "../../screens/RegistrationScreen/types";

export interface Props {
  editable?: boolean;
  values: InputsModel;
  errors?: Partial<InputsModel>;
  onInputChange?: (text: string, input: keyof InputsModel) => void;
  onError?: (errorMessage: string | null, input: keyof InputsModel) => void;
  onSubmit?: () => void;
}
