import { CiTempHigh, CiUmbrella } from "react-icons/ci";
import { convertUnixTimeToFormattedDate } from "../utils/dateTime";
import { Accordion } from "flowbite-react";
import WeatherDetail from "./weatherdetail";
import { BsWind, BsEyeglasses, BsSunrise, BsSunset } from "react-icons/bs";

const DailyForecast = (forecast) => {
  const forecastToday = forecast.props;
  const icon = forecastToday.day.condition.icon;

  return (
    <Accordion
      collapseAll
      className=" mt-3 rounded-xl bg-secondary-color border-none"
    >
      <Accordion.Panel>
        <Accordion.Title className=" hover:bg-hover-color rounded-xl text-font-color">
          <div className="flex text-font-color">
            <div>
              <img className=" size-14 mr-4" src={icon} />
            </div>
            <div>
              <div className="text-md font-bold">
                <h1>
                  {convertUnixTimeToFormattedDate(forecastToday.date_epoch)}
                </h1>
              </div>
              <div className=" flex mt-0">
                <div className=" flex mt-0">
                  <CiUmbrella className=" mr-1" size="1.8rem" />
                  <p className=" text-sm">{`${forecastToday.day.daily_chance_of_rain}%`}</p>
                </div>
                <div className="flex mt-0">
                  <CiTempHigh className="mr-1" size="1.8rem" />
                  <p className="text-sm">{`${forecastToday.day.avgtemp_c}°C`}</p>
                </div>
              </div>
            </div>
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex justify-center">
            <div className=" grid grid-cols-2 gap-x-10 gap-y-0">
              <WeatherDetail
                imageSource={<BsWind size={24} />}
                data={forecastToday ? `${forecastToday.day.maxwind_kph} ` : " "}
                description={"Wind"}
              />
              <WeatherDetail
                imageSource={<BsEyeglasses size={24} />}
                data={forecastToday ? `${forecastToday.day.uv} ` : " "}
                description={"UV"}
              />
              <WeatherDetail
                imageSource={<BsSunrise size={24} />}
                data={forecastToday ? `${forecastToday.astro.sunrise} ` : " "}
                description={"Sunrise"}
              />
              <WeatherDetail
                imageSource={<BsSunset size={24} />}
                data={forecastToday ? `${forecastToday.astro.sunset} ` : " "}
                description={"Sunset"}
              />
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default DailyForecast;
