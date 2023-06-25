import { InputsModel } from "../types";

export interface Props {
  errors: Partial<InputsModel>;
  onInputChange: (text: string, input: keyof InputsModel) => void;
  onError: (errorMessage: string | null, input: keyof InputsModel) => void;
  onSubmit: () => void;
}
