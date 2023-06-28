import Messages from "../../constants/Messages";
import User from "../../types/User";
import { InputsModel, Validation } from "./types";

export const validateInputs = (inputs: InputsModel): Validation => {
  const validation: Validation = { valid: true, inputs: {} as InputsModel };

  if (!inputs.name) {
    validation.inputs.name = Messages.please_input_your_name;
  }

  if (!inputs.age) {
    validation.inputs.age = Messages.please_input_your_age;
  } else if (
    !/^\d+$/.test(inputs.age) ||
    isNaN(parseInt(inputs.age)) ||
    parseInt(inputs.age) < 13
  ) {
    validation.inputs.age = Messages.please_input_correct_age;
  }

  if (!inputs.birthdate) {
    validation.inputs.birthdate = Messages.please_input_your_date_of_birth;
  } else if (
    !parseDate(inputs.birthdate) ||
    new Date().getFullYear() - parseDate(inputs.birthdate)!.getFullYear() < 13
  ) {
    validation.inputs.birthdate = Messages.please_input_correct_date_of_birth;
  }

  if (!inputs.profession) {
    validation.inputs.profession = Messages.please_input_your_profession;
  } else if (
    inputs.profession !== "Employed" &&
    inputs.profession !== "Student"
  ) {
    validation.inputs.profession =
      Messages.only_two_types_of_professions_are_supported;
  }

  if (!inputs.locality) {
    validation.inputs.locality = Messages.please_input_your_locality;
  }

  if (!inputs.guestsCount) {
    validation.inputs.guestsCount = Messages.please_input_number_of_guests;
  } else if (!/^0|1|2$/.test(inputs.guestsCount)) {
    validation.inputs.guestsCount = Messages.allowed_number_of_guests;
  }

  if (!inputs.address) {
    validation.inputs.address = Messages.please_input_your_address;
  }

  // If any input has error message make validation as invalid
  for (const input in validation.inputs) {
    if (validation.inputs[input as keyof InputsModel]) {
      validation.valid = false;
      break;
    }
  }

  return validation;
};

export const mapInputsToUser = (inputs: InputsModel, id: number): User => ({
  ...inputs,
  id,
  age: parseInt(inputs.age),
  guestsCount: parseInt(inputs.locality),
  profession: inputs.profession as User["profession"],
});

function parseDate(value: string): Date | null {
  const validDate = value.match(/^(\d{1,2})[.,/](\d{1,2})[.,/](\d{4})$/);
  return validDate
    ? new Date(
        parseInt(validDate[3]),
        parseInt(validDate[2]) - 1,
        parseInt(validDate[1])
      )
    : null;
}
