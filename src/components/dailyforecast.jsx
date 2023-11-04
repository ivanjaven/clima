import { useState } from "react";
import { SunCloud } from "../img/Rain Cloud Icon.gif";
import { CiTempHigh, CiUmbrella } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";

const DailyForecast = (forecast) => {
  function convertUnixTimeToFormattedDate(unixTimestamp) {
    // Convert Unix timestamp to milliseconds
    const date = new Date(unixTimestamp * 1000);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const day = days[date.getDay()];
    const dayNumber = date.getDate();
    const month = months[date.getMonth()];

    const formattedDate = `${day}, ${month} ${dayNumber} `;

    return formattedDate;
  }

  const forecastToday = forecast.props;
  return (
    <div className="container">
      <div className="data">
        <div className="icon-container">
          {/* <img src={require("../img/icon-Cloudy Night.gif")} /> */}
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
