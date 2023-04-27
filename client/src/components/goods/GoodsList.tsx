import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../http";
import { DevicesResponse } from "../../models/response/DeviceResponse";
import { IDevice } from "../../models/IDevice";
import { Link } from "react-router-dom";

const GoodsList = () => {
  const [goods, setGoods] = useState<IDevice[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchGoods = async () => {
    setIsLoading(true);
    const goods = await axios.get<DevicesResponse>(`${API_URL}/api/devices`);

    setTimeout(() => {
      setGoods(goods.data.data.devices);
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchGoods();
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
      {goods.map((dev) => (
        <div className="dev-wrap" key={dev._id}>
          <Link to={`/${dev._id}`}>
            <img src={dev.image} alt={dev.image} />
            <div className="dev-wrap-right">
              <h2>{dev.full_name}</h2>
              <p>{dev.micro_description}</p>
              <p>
                {dev.prices?.amount} {dev.prices?.currency}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GoodsList;
