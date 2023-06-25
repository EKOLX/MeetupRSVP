export interface InputsModel {
  name: string;
  age: string;
  birthdate: string;
  profession: string;
  locality: string;
  guestsCount: string;
  address: string;
}

export interface Validation {
  valid: boolean;
  inputs: InputsModel;
}
