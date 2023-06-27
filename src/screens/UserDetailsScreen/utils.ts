import { InputsModel } from "../RegistrationScreen/types";
import User from "../../types/User";

export const mapUserToInputs = (user: User): InputsModel => ({
  ...user,
  age: user.age.toString(),
  guestsCount: user.locality.toString(),
});
