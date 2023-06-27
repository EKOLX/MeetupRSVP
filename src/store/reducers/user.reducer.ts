import { UserAction } from "../actions/user.action";
import User from "../../types/User";

interface UserState {
  users: Array<User>;
  filteredUsers: Array<User>;
}

const initialState: UserState = { users: [], filteredUsers: [] };

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "LOAD_ALL_USERS":
      return {
        ...state,
        users: [...state.users, ...action.users],
        filteredUsers: [...action.users],
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "SEARCH_USER":
      return {
        ...state,
        filteredUsers: state.users.filter(
          (user) =>
            user.name
              .toLocaleLowerCase()
              .includes(action.nameOrLocality.toLocaleLowerCase()) ||
            user.locality
              .toLocaleLowerCase()
              .includes(action.nameOrLocality.toLocaleLowerCase())
        ),
      };
    default:
      return state;
  }
};
