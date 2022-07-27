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

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      splashScreen: undefined;
      home: undefined;
      carDetails: car;
      scheduling: car;
      schedulingDetails: car;
      schedulingComplete: undefined;
      myCars: undefined;
      signIn: undefined;
      firstStep: undefined;
      secondStep: user;
    }
  }
}