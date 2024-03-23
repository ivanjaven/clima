import DailyForecast from "./dailyforecast";

const WeekForecast = (forecast) => {
  const weekForecast = forecast.props.forecastday;

  return (
    <div>
      <div className="p-8 mt-4 ml-8 bg-primary-color h-full w-5/6 rounded-3xl">
        <div>
          <h1 className=" text-2xl font-bold">This Week</h1>
          <p className="text-lg">7-day forecast</p>
        </div>
        {weekForecast.map((forecast, index) => {
          if (index >= 1) return <DailyForecast key={index} props={forecast} />;
        })}
      </div>
    </div>
  );
};

export default WeekForecast;
