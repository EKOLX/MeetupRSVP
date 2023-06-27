import { Dispatch } from "redux";

import * as userService from "../../services/user.service";
import User from "../../types/User";

interface LoadAllAction {
  type: "LOAD_ALL_USERS";
  users: Array<User>;
}

interface AddAction {
  type: "ADD_USER";
  user: User;
}

interface SearchAction {
  type: "SEARCH_USER";
  nameOrLocality: string;
}

export type UserAction = LoadAllAction | AddAction | SearchAction;

export const addUser =
  (user: User) => async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: "ADD_USER", user });
    } catch (error) {}
  };

export const getAllUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    const users = await userService.getAllUsers("e405eec0");
    dispatch({ type: "LOAD_ALL_USERS", users });
  } catch (error) {}
};

export const searchUser = (nameOrLocality: string): UserAction => ({
  type: "SEARCH_USER",
  nameOrLocality,
});
