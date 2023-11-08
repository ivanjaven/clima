import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import WeatherBox from "./components/weatherbox";
import WeatherDetail from "./components/weatherdetailbox";
import WeekForecast from "./components/weekforecast";
import Loading from "./components/loading";
import { getWeatherForecast } from "./utils/weather";
import { getUserLocation, getLocationReccomendations } from "./utils/location";
import "./styles/main.scss";

function App() {
  const [currentData, setCurrentData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetForecast = async () => {
      const location = await getUserLocation();

      try {
        const data = await getWeatherForecast(location); // Call the async function and await the result
        setCurrentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetForecast();
  }, []);

  const handleSearch = (query) => {
    const fetchDataAndSetForecast = async () => {
      try {
        const data = await getWeatherForecast(query); // Call the async function and await the result
        setCurrentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetForecast();
  };

  const { current } = currentData || "";
  const { forecast } = currentData || "";
  const location = currentData ? currentData.location : "";

  return current ? (
    <>
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
          handleSearch={handleSearch}
        />
        <WeekForecast className="weekforecast" props={forecast} />
      </div>
    </>
  ) : (
    <Loading size={"10rem"} />
  );
}

export default App;
