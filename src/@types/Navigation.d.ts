import { Params } from "../screens/Confirmation";
import { CarDataProps } from "./CarTypes";

interface ItemsParams {
  car: CarDataProps;
}

interface UserDataProps {
  name: string;
  email: string;
  driverLicense: string;
}

interface UserItemsParams {
  user: UserDataProps;
}

interface ScreenParams {
  title: string;
  message: string;
  nextScreenRoute: 'home' | 'signIn';
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      splashScreen: undefined;
      home: undefined;
      carDetails: car;
      scheduling: car;
      schedulingDetails: car;
      confirmation: ScreenParams;
      myCars: undefined;
      signIn: undefined;
      firstStep: undefined;
      secondStep: undefined;
    }
  }
}