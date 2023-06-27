import { combineReducers } from "redux";
import { userReducer } from "./reducers/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
