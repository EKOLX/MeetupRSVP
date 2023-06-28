import Messages from "../../../constants/Messages";
import { validateInputs } from "../utils";
import { InputsModel } from "../types";

describe("Registration screen: utils functions", () => {
  describe("validateInputs test suite", () => {
    it("it should be invalidated if the input data is empty", () => {
      const inputs: InputsModel = {} as InputsModel;

      const validation = validateInputs(inputs);

      expect(validation.valid).toEqual(false);
      expect(validation.inputs.name).toEqual(Messages.please_input_your_name);
      expect(validation.inputs.age).toEqual(Messages.please_input_your_age);
      expect(validation.inputs.birthdate).toEqual(
        Messages.please_input_your_date_of_birth
      );
      expect(validation.inputs.profession).toEqual(
        Messages.please_input_your_profession
      );
      expect(validation.inputs.locality).toEqual(
        Messages.please_input_your_locality
      );
      expect(validation.inputs.guestsCount).toEqual(
        Messages.please_input_number_of_guests
      );
      expect(validation.inputs.address).toEqual(
        Messages.please_input_your_address
      );
    });

    it("it should be invalidated if the input data is incorrect", () => {
      const inputs: InputsModel = {
        name: "EL Khan",
        age: "3",
        birthdate: "22 June 1988",
        profession: "Programmer",
        locality: "Prague",
        guestsCount: "3",
        address: "Petrinska street",
      };

      const validation = validateInputs(inputs);

      expect(validation.valid).toEqual(false);
      expect(validation.inputs.name).toBeUndefined();
      expect(validation.inputs.age).toEqual(Messages.please_input_correct_age);
      expect(validation.inputs.birthdate).toEqual(
        Messages.please_input_correct_date_of_birth
      );
      expect(validation.inputs.profession).toEqual(
        Messages.only_two_types_of_professions_are_supported
      );
      expect(validation.inputs.locality).toBeUndefined();
      expect(validation.inputs.guestsCount).toEqual(
        Messages.allowed_number_of_guests
      );
      expect(validation.inputs.address).toBeUndefined();
    });

    it("it should be validated if the input data is correct", () => {
      const inputs: InputsModel = {
        name: "EL Khan",
        age: "33",
        birthdate: "22.06.1990",
        profession: "Employed",
        locality: "Prague",
        guestsCount: "0",
        address: "Petrinska street",
      };

      const validation = validateInputs(inputs);

      expect(validation.valid).toEqual(true);
      expect(validation.inputs.name).toBeUndefined();
      expect(validation.inputs.age).toBeUndefined();
      expect(validation.inputs.birthdate).toBeUndefined();
      expect(validation.inputs.profession).toBeUndefined();
      expect(validation.inputs.locality).toBeUndefined();
      expect(validation.inputs.guestsCount).toBeUndefined();
      expect(validation.inputs.address).toBeUndefined();
    });
  });
});
