import WeatherDetail from "./weatherdetail";
import { CiTempHigh } from "react-icons/ci";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { AiOutlineCloud } from "react-icons/ai";
import { BsWind, BsEyeglasses, BsSunrise, BsSunset } from "react-icons/bs";
import { IoUmbrellaOutline } from "react-icons/io5";
import { SearchBar } from "./searchbar";

const WeatherDetailBox = ({ current, forecast, handleSearch }) => {
  const currentWeather = current;
  const currentForecast = forecast.forecastday[0].day;
  const currentForecastAstro = forecast.forecastday[0].astro;
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <h1 className=" text-xl font-medium pb-5 mt-10 mx-5 sm:mx-14 md:mx-32 md:text-2xl lg:mx-6 xl:mx-12">
        Weather Details
      </h1>
      <div className=" grid grid-cols-2 mx-10 sm:mx-28 md:mx-48 md:gap-x-28 lg:mx-12 xl:gap-x-12">
        <WeatherDetail
          imageSource={<CiTempHigh size={30} />}
          data={currentWeather ? `${currentWeather.temp_c}° ` : " "}
          description={"Temperature"}
        />
        <WeatherDetail
          imageSource={<LiaTemperatureLowSolid size={30} />}
          data={currentWeather ? `${currentWeather.feelslike_c}°` : " "}
          description={"Feels like"}
        />
        <WeatherDetail
          imageSource={<AiOutlineCloud size={30} />}
          data={currentWeather ? `${currentWeather.cloud} %` : " "}
          description={"Cloud cover"}
        />
        <WeatherDetail
          imageSource={<IoUmbrellaOutline size={30} />}
          data={
            currentWeather ? `${currentForecast.daily_chance_of_rain}%` : " "
          }
          description={"Chance"}
        />
        <WeatherDetail
          imageSource={<BsWind size={30} />}
          data={currentWeather ? `${currentWeather.wind_kph} km/h` : " "}
          description={"Wind speed"}
        />
        <WeatherDetail
          imageSource={<BsEyeglasses size={30} />}
          data={currentWeather ? `${currentWeather.uv}` : " "}
          description={"UV index"}
        />
        <WeatherDetail
          imageSource={<BsSunrise size={30} />}
          data={currentWeather ? `${currentForecastAstro.sunrise}` : " "}
          description={"Sunrise"}
        />
        <WeatherDetail
          imageSource={<BsSunset size={30} />}
          data={currentWeather ? `${currentForecastAstro.sunset}` : " "}
          description={"Sunset"}
        />
      </div>
    </div>
  );
};

export default WeatherDetailBox;
