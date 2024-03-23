import DailyForecast from "./dailyforecast";
import { Accordion } from "flowbite-react";

const WeekForecast = (forecast) => {
  const weekForecast = forecast.props.forecastday;

  return (
    <Accordion
      collapseAll
      className=" lg:ml-5 md:mx-2 mt-4 border-none lg:translate-x-72 xl:translate-x-0"
    >
      <Accordion.Panel>
        <div className=" bg-primary-color p-8 pl-5 pr-5 rounded-3xl w-11/12">
          <div>
            <h1 className=" text-2xl font-bold">This Week</h1>
            <p className="text-lg">{weekForecast.length - 1}-day forecast</p>
          </div>
          {weekForecast.map((forecast, index) => {
            if (index >= 1)
              return <DailyForecast key={index} props={forecast} />;
          })}
        </div>
      </Accordion.Panel>
    </Accordion>
  );
};

export default WeekForecast;
