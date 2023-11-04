import { useState, useEffect } from "react";
import "./App.css";
// import HourlyForecast from "./components/hourlyforecast/hourlyforecast";
import NavBar from "./components/navbar";
import WeatherBox from "./components/weatherbox";
import WeatherDetail from "./components/weatherdetailbox";
import WeekForecast from "./components/weekforecast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoReloadCircle } from "react-icons/io5";
import "./styles/main.scss";
// import WeatherDataContainer from "./components/weatherdatacontainer/weatherdatacontainer";

function App() {
  const apiKey = "9c59f50cdcd3420b87f04537230111";
  const place = "malolos,bulacan,philipines";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=8&aqi=yes&alerts=yes`;

  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setCurrentData(data);
        } else {
          console.error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error("An error occurred while fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  const { current } = currentData || "";
  const { forecast } = currentData || "";
  const location = currentData ? currentData.location : "";

  return current ? (
    <>
      {/* <div className="container"> */}
      <NavBar />
      <div className="currentweather">
        {current && (
          <WeatherBox
            className="weatherbox"
            current={current}
            location={location}
          />
        )}
        <WeatherDetail
          className="weatherdetail"
          current={current}
          forecast={forecast}
          // forecast={forecast}
        />
        <WeekForecast className="weekforecast" props={forecast} />
        {/* <HourlyForecast className="hourlyforecast" /> */}
      </div>
      {/* <WeatherDataContainer /> */}
      {/* </div> */}
    </>
  ) : (
    <AiOutlineLoading3Quarters size={"10rem"} />
  );
}

export default App;
