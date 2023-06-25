import { InputsModel, Validation } from "./types";

export const validateInputs = (inputs: InputsModel): Validation => {
  const validation: Validation = { valid: true, inputs: {} as InputsModel };

  if (!inputs.name) {
    validation.inputs.name = "Please input your name";
    validation.valid = false;
  }
  if (!inputs.age) {
    validation.inputs.age = "Please input your age";
    validation.valid = false;
  }
  if (!inputs.birthdate) {
    validation.inputs.birthdate = "Please input your date of birth";
    validation.valid = false;
  }
  if (!inputs.profession) {
    validation.inputs.profession = "Please input your profession";
    validation.valid = false;
  }
  if (!inputs.locality) {
    validation.inputs.locality = "Please input your locality";
    validation.valid = false;
  }
  if (!inputs.guestsCount) {
    validation.inputs.guestsCount = "Please input number of guests";
    validation.valid = false;
  }
  if (!inputs.address) {
    validation.inputs.address = "Please input your address";
    validation.valid = false;
  }

  return validation;
};
