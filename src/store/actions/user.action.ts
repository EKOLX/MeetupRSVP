import { Dispatch } from "redux";

import * as userService from "../../services/user.service";
import User from "../../types/User";

interface LoadAllAction {
  type: "LOAD_ALL_USERS";
  users: Array<User>;
}

export type UserAction = LoadAllAction;

export const getAllUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    const users = await userService.getAllUsers("e405eec0");
    dispatch({ type: "LOAD_ALL_USERS", users });
  } catch (error) {}
};
