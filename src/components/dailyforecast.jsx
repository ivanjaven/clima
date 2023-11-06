import { CiTempHigh, CiUmbrella } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
// import ;
import { convertUnixTimeToFormattedDate } from "../utils/dateTime";

const DailyForecast = (forecast, key) => {
  const forecastToday = forecast.props;
  const backgroundImage = "../img/icon-Clear Morning.gif";
  return (
    <div className="container">
      <div className="data">
        <div className="icon-container">
          <img src={require("../img/icon-Cloudy Night.gif")} />
        </div>
        <div className="data_all">
          <div className="data_date">
            <h1>{convertUnixTimeToFormattedDate(forecastToday.date_epoch)}</h1>
          </div>
          <div className="data_forecast">
            <div className="data_forecast--precipitation">
              <CiUmbrella className="weather_logo" size="1.8rem" />
              <p>{`${forecastToday.day.daily_chance_of_rain}%`}</p>
            </div>
            <div className="data_forecast--temperature">
              <CiTempHigh className="weather_logo" size="2rem" />
              <p>{`${forecastToday.day.avgtemp_c}°C`}</p>
            </div>
          </div>
        </div>
        <div className="dropdown_logo">
          <IoIosArrowDropdown size="2rem" />
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
