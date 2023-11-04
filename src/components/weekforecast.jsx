import { useState } from "react";
import DailyForecast from "./dailyforecast";
// import "./weekforecast.scss";

const WeekForecast = (forecast) => {
  const weekForecast = forecast.props.forecastday;
  // console.log(weekForecast);

  return (
    <div className="weekforecast">
      <div className="weekforecast_header">
        <h1>This Week</h1>
        <p>7-day forecast</p>
      </div>
      {weekForecast.map((forecast, index) => {
        if (index >= 1) return <DailyForecast key={index} props={forecast} />;
      })}
    </div>
  );
};

export default WeekForecast;
