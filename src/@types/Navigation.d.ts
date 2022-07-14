import { CarDataProps } from "./CarTypes";

interface ItemsParams {
  car: CarDataProps;
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
    }
  }
}