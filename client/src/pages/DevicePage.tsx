import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../http";
import { IDevice } from "../models/IDevice";
import { DeviceResponse } from "../models/response/DeviceResponse";

const DevicePage = () => {
  const { id } = useParams();
  const [device, setDevice] = useState<IDevice>({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchDevice = async () => {
    setIsLoading(true);
    const device = await axios.get<DeviceResponse>(
      `${API_URL}/api/devices/${id}`
    );

    setTimeout(() => {
      setDevice(device.data.data.device);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchDevice();
  }, []);

  return isLoading ? (
    <div className="load-wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : (
    <div className="dev-wrapper">
      <img src={device.image} alt={device.image} />
      <div className="dev-wrap-right">
        <h1>{device.full_name}</h1>
        <p>{device.description}</p>
        <p>
          {device.prices?.amount} {device.prices?.currency}
        </p>
      </div>
    </div>
  );
};

export default DevicePage;
