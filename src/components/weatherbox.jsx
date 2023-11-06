import { IoIosPartlySunny } from "react-icons/io";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const WeatherBox = ({ current, location }) => {
  return (
    <>
      <div className="weatherbox">
        <div className="weatherbox_header">
          <div className="weatherbox_header--logo">
            <IoIosPartlySunny size="2.8rem" />
          </div>
          <div className="weatherbox_header--title">
            <h1>Weather Today</h1>
            <p>{`${location.name}, ${location.region}`}</p>
          </div>
        </div>
        <div className="current_temp">
          <h1>{`${current.temp_c}°C`}</h1>
          <p>{current.condition.text}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherBox;
