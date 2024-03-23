import { useState, useEffect } from "react";
import "./input.css";
import "./App.css";
import NavBar from "./components/navbar";
import WeatherBox from "./components/weatherbox";
import WeatherDetail from "./components/weatherdetailbox";
import WeekForecast from "./components/weekforecast";
import Loading from "./components/loading";
import { getWeatherForecast } from "./utils/weather";
import { getUserLocation, getLocationReccomendations } from "./utils/location";

// import "./styles/main.scss";

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
        const timeoutPromise = new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(
              new Error("Timeout: The request took too long to complete.")
            );
          }, 10000); // 5 seconds timeout
        });

        const dataPromise = getWeatherForecast(query);

        // Wait for either the data or the timeout promise to resolve
        const data = await Promise.race([dataPromise, timeoutPromise]);

        if (data) {
          setCurrentData(data);
        } else {
          console.error("Place does not exist or could not be found.");
        }
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
      <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:flex md:flex-col md:justify-center md:align-middle">
        {current && <WeatherBox current={current} location={location} />}
        <WeatherDetail
          current={current}
          forecast={forecast}
          handleSearch={handleSearch}
        />
        <WeekForecast props={forecast} />
      </div>
    </>
  ) : (
    <Loading size={"10rem"} />
  );
}

export default App;
