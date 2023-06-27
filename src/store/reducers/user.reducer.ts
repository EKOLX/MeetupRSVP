import { UserAction } from "../actions/user.action";
import User from "../../types/User";

interface UserState {
  users: Array<User>;
}

const initialState: UserState = { users: [] };

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "LOAD_ALL_USERS":
      return {
        ...state,
        users: [...action.users],
      };
    default:
      return state;
  }
};
