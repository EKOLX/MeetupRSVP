import { DrawerScreenProps } from "@react-navigation/drawer";

import User from "../types/User";

export type DrawerParamList = {
  Registration: undefined;
  Users: undefined;
  Reports: { user: User };
};

export type RootDrawerScreenProps<Screen extends keyof DrawerParamList> =
  DrawerScreenProps<DrawerParamList, Screen>;
