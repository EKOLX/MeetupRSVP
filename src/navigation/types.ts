import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import User from "../types/User";

export type RootDrawerParamList = {
  Registration: undefined;
  UserRoot: undefined;
  Reports: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
  DrawerScreenProps<RootDrawerParamList, Screen>;

export type UserStackParamList = {
  Users: undefined;
  UserDetails: { user: User };
};

export type UserStackScreenProps<
  Screen extends keyof UserStackParamList,
  NavigatorID extends string | undefined = undefined
> = NativeStackScreenProps<UserStackParamList, Screen, NavigatorID>;
