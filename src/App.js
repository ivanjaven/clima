import { useState, useEffect } from "react";
import "./App.css";
// import HourlyForecast from "./components/hourlyforecast/hourlyforecast";
import NavBar from "./components/navbar";
import WeatherBox from "./components/weatherbox";
import WeatherDetail from "./components/weatherdetailbox";
import WeekForecast from "./components/weekforecast";

import Loading from "./components/loading";

import { getWeatherForecast } from "./utils/weather";
import "./styles/main.scss";
// import WeatherDataContainer from "./components/weatherdatacontainer/weatherdatacontainer";

function App() {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
    // Implement your search logic here
  };

  const [currentData, setCurrentData] = useState(null);
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetForecast = async () => {
      try {
        const data = await getWeatherForecast("malolos,bulacan"); // Call the async function and await the result
        setCurrentData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndSetForecast();
  }, []);

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
        />
        <WeekForecast className="weekforecast" props={forecast} />
      </div>
    </>
  ) : (
    <Loading size={"10rem"} />
  );
}

export default App;
