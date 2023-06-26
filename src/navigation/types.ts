import { DrawerScreenProps } from "@react-navigation/drawer";

export type DrawerParamList = {
  Registration: undefined;
  Users: undefined;
  Reports: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof DrawerParamList> =
  DrawerScreenProps<DrawerParamList, Screen>;
