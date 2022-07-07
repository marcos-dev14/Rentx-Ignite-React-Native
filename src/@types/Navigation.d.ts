import { CarDataProps } from "./CarTypes";

interface ItemsParams {
  car: CarDataProps;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      carDetails: car;
      scheduling: undefined;
      schedulingDetails: undefined;
      schedulingComplete: undefined;
    }
  }
}