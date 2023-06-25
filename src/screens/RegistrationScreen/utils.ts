import { InputsModel, Validation } from "./types";

export const validateInputs = (inputs: InputsModel): Validation => {
  const validation: Validation = { valid: true, inputs: {} as InputsModel };

  if (!inputs.name) {
    validation.inputs.name = "Please input your name";
  }

  if (!inputs.age) {
    validation.inputs.age = "Please input your age";
  } else if (
    !/^\d+$/.test(inputs.age) ||
    isNaN(parseInt(inputs.age)) ||
    parseInt(inputs.age) < 4
  ) {
    validation.inputs.age = "Please input correct age";
  }

  if (!inputs.birthdate) {
    validation.inputs.birthdate = "Please input your date of birth";
  } else if (!parseDate(inputs.birthdate)) {
    validation.inputs.birthdate = "Please input correct date of birth";
  }

  if (!inputs.profession) {
    validation.inputs.profession = "Please input your profession";
  } else if (
    inputs.profession !== "Employed" &&
    inputs.profession !== "Student"
  ) {
    validation.inputs.profession =
      "Only two types of professions are supported: 'Employed' or 'Student'";
  }

  if (!inputs.locality) {
    validation.inputs.locality = "Please input your locality";
  }

  if (!inputs.guestsCount) {
    validation.inputs.guestsCount = "Please input number of guests";
  } else if (!/^0|1|2$/.test(inputs.guestsCount)) {
    validation.inputs.guestsCount = "Allowed number of guests: 0, 1 or 2";
  }

  if (!inputs.address) {
    validation.inputs.address = "Please input your address";
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

function parseDate(value: string) {
  const validDate = value.match(/^(\d{1,2}).(\d{1,2}).(\d{4})$/);
  return validDate
    ? new Date(
        parseInt(validDate[3]),
        parseInt(validDate[2]) - 1,
        parseInt(validDate[1])
      )
    : null;
}
