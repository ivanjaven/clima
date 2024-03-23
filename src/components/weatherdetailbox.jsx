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
      <h1 className=" text-xl font-medium pb-5 mt-10 ml-10">Weather Details</h1>
      <div className=" grid grid-cols-2 ml-10">
        <WeatherDetail
          imageSource={<CiTempHigh className="logo" size={30} />}
          data={currentWeather ? `${currentWeather.temp_c}° ` : " "}
          description={"Temperature"}
        />
        <WeatherDetail
          imageSource={<LiaTemperatureLowSolid className="logo" size={30} />}
          data={currentWeather ? `${currentWeather.feelslike_c}°` : " "}
          description={"Feels like"}
        />
        <WeatherDetail
          imageSource={<AiOutlineCloud className="logo" size={30} />}
          data={currentWeather ? `${currentWeather.cloud} %` : " "}
          description={"Cloud cover"}
        />
        <WeatherDetail
          imageSource={<IoUmbrellaOutline className="logo" size={30} />}
          data={
            currentWeather ? `${currentForecast.daily_chance_of_rain}%` : " "
          }
          description={"Chance"}
        />
        <WeatherDetail
          imageSource={<BsWind className="logo" size={30} />}
          data={currentWeather ? `${currentWeather.wind_kph} km/h` : " "}
          description={"Wind speed"}
        />
        <WeatherDetail
          imageSource={<BsEyeglasses className="logo" size={30} />}
          data={currentWeather ? `${currentWeather.uv}` : " "}
          description={"UV index"}
        />
        <WeatherDetail
          imageSource={<BsSunrise className="logo" size={30} />}
          data={currentWeather ? `${currentForecastAstro.sunrise}` : " "}
          description={"Sunrise"}
        />
        <WeatherDetail
          imageSource={<BsSunset className="logo" size={30} />}
          data={currentWeather ? `${currentForecastAstro.sunset}` : " "}
          description={"Sunset"}
        />
      </div>
    </div>
  );
};

export default WeatherDetailBox;
