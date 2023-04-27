import { IDevice } from "../IDevice";

export interface DevicesResponse {
  status: string;
  results: string;
  data: {
    devices: IDevice[];
  };
}

export interface DeviceResponse {
  status: string;
  data: {
    device: IDevice;
  };
}
