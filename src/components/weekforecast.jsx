import DailyForecast from "./dailyforecast";
import { Accordion } from "flowbite-react";

const WeekForecast = (forecast) => {
  const weekForecast = forecast.props.forecastday;

  return (
    <Accordion collapseAll className=" border-none">
      <div className=" bg-primary-color p-8 pl-10 pr-10 rounded-3xl w-5/6">
        <div>
          <h1 className=" text-2xl font-bold">This Week</h1>
          <p className="text-lg">{weekForecast.length - 1}-day forecast</p>
        </div>
        {weekForecast.map((forecast, index) => {
          if (index >= 1) return <DailyForecast key={index} props={forecast} />;
        })}
      </div>
    </Accordion>
  );
};

export default WeekForecast;
