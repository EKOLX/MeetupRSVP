export default interface User {
  id: number;
  name: string;
  age: number;
  birthdate: string;
  profession: "Employed" | "Student";
  locality: string;
  guestsCount: number;
  address: string;
}
