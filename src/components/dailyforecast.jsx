import { CiTempHigh, CiUmbrella } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { getIconForWeatherForecast } from "../utils/config";
import { convertUnixTimeToFormattedDate } from "../utils/dateTime";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { Accordion } from "flowbite-react";
import WeatherDetail from "./weatherdetail";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { AiOutlineCloud } from "react-icons/ai";
import { BsWind, BsEyeglasses, BsSunrise, BsSunset } from "react-icons/bs";
import { IoUmbrellaOutline } from "react-icons/io5";
import { SearchBar } from "./searchbar";

const DailyForecast = (forecast, key) => {
  const forecastToday = forecast.props;
  console.log(forecastToday);
  const icon = forecastToday.day.condition.icon;

  // return (
  //   <div className=" max-h-14 max-w-80 bg-secondary-color border-solid border border-font-color align-middle p-4">
  //     <div className="flex pl-12">
  // <div className="icon-container bounce">
  //   <img src={icon} />
  // </div>
  // <div className="flex flex-col ml-12 mr-32 mb-0">
  //   <div className="data_date">
  //     <h1>{convertUnixTimeToFormattedDate(forecastToday.date_epoch)}</h1>
  //   </div>
  //   <div className="data_forecast">
  //     <div className="data_forecast--precipitation">
  //       <CiUmbrella className="weather_logo" size="1.8rem" />
  //       <p>{`${forecastToday.day.daily_chance_of_rain}%`}</p>
  //     </div>
  //     <div className="data_forecast--temperature">
  //       <CiTempHigh className="weather_logo" size="2rem" />
  //       <p>{`${forecastToday.day.avgtemp_c}°C`}</p>
  //     </div>
  //   </div>
  // </div>
  //       <div className="dropdown_logo">
  //         <IoIosArrowDropdown size="2rem" />
  //       </div>
  //     </div>
  //   </div>
  // );

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
