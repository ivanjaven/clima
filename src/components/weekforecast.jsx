import DailyForecast from "./dailyforecast";

const WeekForecast = (forecast) => {
  const weekForecast = forecast.props.forecastday;

  return (
    <div className="weekforecast_container">
      <div className="weekforecast">
        <div className="weekforecast_header">
          <h1>This Week</h1>
          <p>7-day forecast</p>
        </div>
        {weekForecast.map((forecast, index) => {
          if (index >= 1) return <DailyForecast key={index} props={forecast} />;
        })}
      </div>
    </div>
  );
};

export default WeekForecast;
