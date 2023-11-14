const getWeatherForecast = async (place) => {
  const apiKey = "0468f914918545e58c9110231231411";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=8&aqi=yes&alerts=yes`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Failed to fetch weather data");
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};

export { getWeatherForecast };
