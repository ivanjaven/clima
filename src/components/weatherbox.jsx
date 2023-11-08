import { BiSolidMap } from "react-icons/bi";

const WeatherBox = ({ current, location }) => {
  return (
    <>
      <div className="weatherbox">
        <div className="weatherbox_header">
          <div className="weatherbox_header--logo">
            <img src={current.condition.icon} />
          </div>
          <div className="weatherbox_header--title">
            <h1>Weather Today</h1>
            <div className="location">
              <BiSolidMap className="map-logo" size={"2rem"} />
              <p>{`${location.name}, ${location.region}`}</p>
            </div>
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
